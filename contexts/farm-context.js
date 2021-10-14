import { createContext, useContext, useMemo, useEffect, useCallback, useState } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

import { CONTRACTS, PROVIDER } from 'config'
import * as mineAPI from 'services/api-mine'
import { usePopup } from 'contexts/popup-context'
import { useContracts } from './contract-context'
import POOL_MANAGER_ABI from 'libs/abis/pool-manager.json'
import ERC20_ABI from 'libs/abis/erc20.json'
import P_BTC_ABI from 'libs/abis/p-btc.json'
import P_ETH_ABI from 'libs/abis/p-eth.json'
import REWARD_DISTRIBUTOR_ABI from 'libs/abis/reward-distributor.json'
import { isEmpty } from 'utils/helpers/utility'
import MESSAGES from 'utils/constants/messages'

const ContractContext = createContext(null)

const btcFarm = {
  pid: '0',
  tokenName: 'BTC',
  boost: 1,
  staticAPY: 0.8141,
  stake: 'pBTCM',
  stakeBalance: 0,
  stakedBalance: 0,
  totalSupply: 0,
  stakeAddress: CONTRACTS.pBTCM,
  earn: 'WBTC',
  earnAddress: CONTRACTS.wBTC,
}

const ethFarm = {
  pid: '1',
  tokenName: 'ETH',
  boost: 1,
  staticAPY: 0.0302,
  stake: 'pETHM',
  stakeBalance: 0,
  stakedBalance: 0,
  totalSupply: 0,
  stakeAddress: CONTRACTS.pETHM,
  earn: 'ETH',
  earnAddress: CONTRACTS.wETH,
}

const unsignedPoolManagerContract = new ethers.Contract(CONTRACTS.POOL_MANAGER, POOL_MANAGER_ABI, PROVIDER)

export function FarmProvider({ children }) {
  const { account, library } = useWeb3React();
  const { setPopUp } = usePopup();
  const { getBalanceInfo } = useContracts()

  const [loading, setLoading] = useState(false);
  const [initSupply, setInitSupply] = useState(false)
  const [farms, setFarms] = useState([btcFarm, ethFarm]);
  const pBTCMContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.pBTCM, P_BTC_ABI, library.getSigner()) : null, [library])
  const pETHMContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.pETHM, P_ETH_ABI, library.getSigner()) : null, [library])
  const poolManagerContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.POOL_MANAGER, POOL_MANAGER_ABI, library.getSigner()) : null, [library])
  const rewardDistributorContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.REWARD_DISTRIBUTOR, REWARD_DISTRIBUTOR_ABI, library.getSigner()) : null, [library])

  useEffect(() => {
    getSupply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSupply = async () => {
    try {
      const [
        pBTCSupply,
        pETHSupply,
        pools
      ] = await Promise.all([
        unsignedPoolManagerContract.poolStakes(0),
        unsignedPoolManagerContract.poolStakes(1),
        mineAPI.getPools()
      ]);

      const pBTCSupplyValue = ethers.utils.formatUnits(pBTCSupply)
      const pETHSupplyValue = ethers.utils.formatUnits(pETHSupply)
      const pool0Info = pools.find(pool => pool.id === btcFarm.pid)
      const pool1Info = pools.find(pool => pool.id === ethFarm.pid)

      setFarms((prev) => [
        { ...prev[0], ...pool0Info, totalSupply: pBTCSupplyValue },
        { ...prev[1], ...pool1Info, totalSupply: pETHSupplyValue },
      ])
      setInitSupply(true)
    } catch (error) {
      console.log('[Error] getSupply => ', error)
    }
  }

  const getUserInfo = useCallback(async () => {
    try {
      const [
        pBTCMBalance,
        pETHMBalance,
        pBTCMStaked,
        pETHMStaked,
        claimInterval,
        pBTCUserLastClaimedAt,
        pETHUserLastClaimedAt,
        pBTCMClaimAmount,
        pETHMClaimAmount,
      ] = await Promise.all([
        pBTCMContract['balanceOf(address)'](account),
        pETHMContract['balanceOf(address)'](account),
        poolManagerContract.userStakes(0, account),
        poolManagerContract.userStakes(1, account),
        rewardDistributorContract.claimInterval(),
        rewardDistributorContract.userLastClaimedAt(account, 0),
        rewardDistributorContract.userLastClaimedAt(account, 1),
        mineAPI.getClaimableAmount(account, btcFarm.pid),
        mineAPI.getClaimableAmount(account, ethFarm.pid)
      ]);
      const pBTCMBalanceValue = ethers.utils.formatUnits(pBTCMBalance)
      const pETHMBalanceValue = ethers.utils.formatUnits(pETHMBalance)
      const pBTCMStakedValue = ethers.utils.formatUnits(pBTCMStaked)
      const pETHMStakedValue = ethers.utils.formatUnits(pETHMStaked)
      const claimIntervalValue = parseFloat(ethers.utils.formatUnits(claimInterval, 0))
      const pBTCUserLastClaimedAtValue = claimIntervalValue + parseFloat(ethers.utils.formatUnits(pBTCUserLastClaimedAt, 0))
      const pETHUserLastClaimedAtValue = claimIntervalValue + parseFloat(ethers.utils.formatUnits(pETHUserLastClaimedAt, 0))

      setFarms((prev) => [
        { ...prev[0], ...pBTCMClaimAmount, stakeBalance: pBTCMBalanceValue, stakedBalance: pBTCMStakedValue, lastClaimedAt: pBTCUserLastClaimedAtValue },
        { ...prev[1], ...pETHMClaimAmount, stakeBalance: pETHMBalanceValue, stakedBalance: pETHMStakedValue, lastClaimedAt: pETHUserLastClaimedAtValue },
      ])
    } catch (error) {
      console.log('[Error] getUserInfo => ', error)
    }
  }, [account, pBTCMContract, pETHMContract, poolManagerContract, rewardDistributorContract])

  useEffect(() => {
    if (initSupply && pBTCMContract && pETHMContract && poolManagerContract && rewardDistributorContract) {
      getUserInfo()
    }

    if (isEmpty(account)) {
      setFarms((prev) => [
        { ...prev[0], stakeBalance: 0 },
        { ...prev[1], stakeBalance: 0 },
      ])
    }
  }, [initSupply, pBTCMContract, pETHMContract, poolManagerContract, rewardDistributorContract, account, getUserInfo])

  const onStake = async (balance, farm) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { stakeAddress, pid } = farm;
      const stakingTokenContract = new ethers.Contract(stakeAddress, ERC20_ABI, library.getSigner())
      const amount = ethers.utils.parseEther(balance.toString());

      const tokenBalance = await stakingTokenContract.balanceOf(account);
      if (amount.gt(tokenBalance)) {
        setPopUp({
          title: 'Balance Error',
          text: `Please check balance of token on your wallet.`
        })
        setLoading(false)
        return;
      }

      const tokenAllowance = await stakingTokenContract.allowance(account, CONTRACTS.POOL_MANAGER);
      if (tokenAllowance.lt(amount)) {
        const tokenApprove = await stakingTokenContract.approve(CONTRACTS.POOL_MANAGER, ethers.constants.MaxUint256);
        const transactionApprove = await tokenApprove.wait(1);

        if (!transactionApprove.status) {
          setLoading(false);
          setPopUp({
            title: 'Error',
            text: `There is an Error in Approved Transaction`
          })
          return
        }
      }

      const tokenStake = await poolManagerContract.stake(pid, amount);
      const transactionStake = await tokenStake.wait(1);

      if (transactionStake.status) {
        setPopUp({
          title: 'Success',
          text: `You have staked successfully`
        })
        getUserInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in Staked Transaction`
        })
      }
    } catch (error) {
      console.error('onStake =>', error);
    }
    setLoading(false);
  }

  const onWithdraw = async (balance, farm) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { pid } = farm;
      const amount = ethers.utils.parseEther(balance.toString());

      const tokenBalance = await poolManagerContract.userStakes(pid, account);
      if (amount.gt(tokenBalance)) {
        setPopUp({
          title: 'Balance Error',
          text: `Please check balance of token on your wallet.`
        })
        setLoading(false)
        return;
      }

      const tokenWithdraw = await poolManagerContract.unstake(pid, amount);
      const transactionWithdraw = await tokenWithdraw.wait(1);

      if (transactionWithdraw.status) {
        setPopUp({
          title: 'Success',
          text: `You have withdrawn successfully`
        })
        getUserInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in Withdraw Transaction`
        })
      }
    } catch (error) {
      console.error('onWithdraw =>', error);
    }
    setLoading(false);
  }

  const onClaim = async (farm) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { pid, rewardToken } = farm;
      const { doubleRewardAmount, rewardAmount, rewardIndex, signature } = await mineAPI.getClaimableSignature(account, pid);

      const tokenClaim = await rewardDistributorContract.claim(pid, rewardToken, rewardAmount, CONTRACTS.MNET, doubleRewardAmount, rewardIndex, signature, { gasLimit: 1000000 });
      const transactionClaim = await tokenClaim.wait(1);

      if (transactionClaim.status) {
        setPopUp({
          title: 'Success',
          text: `You have claimed successfully`
        })
        getUserInfo();
        getBalanceInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in Claim Transaction`
        })
      }
    } catch (error) {
      console.log('onClaim => ', error);
    }
    setLoading(false);
  }

  return (
    <ContractContext.Provider
      value={{
        loading,
        farms,
        onStake,
        onWithdraw,
        onClaim
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export function useFarm() {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  return context
}