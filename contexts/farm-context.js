import { createContext, useContext, useMemo, useEffect, useCallback, useState } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

import { CONTRACTS, PROVIDER } from 'config'
import { usePopup } from 'contexts/popup-context'
import POOL_MANAGER_ABI from 'libs/abis/pool-manager.json'
import ERC20_ABI from 'libs/abis/erc20.json'
import P_BTC_ABI from 'libs/abis/p-btc.json'
import P_ETH_ABI from 'libs/abis/p-eth.json'
import { isEmpty } from 'utils/helpers/utility'
import MESSAGES from 'utils/constants/messages'

const ContractContext = createContext(null)

const btcFarm = {
  pid: 0,
  tokenName: 'BTC',
  boost: 1,
  staticAPY: 0.8141,
  stake: 'pBTCM',
  stakeBalance: 0,
  stakeAddress: CONTRACTS.pBTCM,
  earn: 'WBTC',
  earnAddress: CONTRACTS.wBTC,
}

const ethFarm = {
  pid: 1,
  tokenName: 'ETH',
  boost: 1,
  staticAPY: 0.0302,
  stake: 'pETHM',
  stakeBalance: 0,
  stakeAddress: CONTRACTS.pETHM,
  earn: 'ETH',
  earnAddress: CONTRACTS.wETH,
}

const unsignedPoolManagerContract = new ethers.Contract(CONTRACTS.POOL_MANAGER, POOL_MANAGER_ABI, PROVIDER)

export function FarmProvider({ children }) {
  const { account, library } = useWeb3React();
  const { setPopUp } = usePopup();

  const [loading, setLoading] = useState(false);
  const [farms, setFarms] = useState([btcFarm, ethFarm]);
  const pBTCMContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.pBTCM, P_BTC_ABI, library.getSigner()) : null, [library])
  const pETHMContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.pETHM, P_ETH_ABI, library.getSigner()) : null, [library])
  const poolManagerContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.POOL_MANAGER, POOL_MANAGER_ABI, library.getSigner()) : null, [library])

  const getUserInfo = useCallback(async () => {
    try {
      const [
        pBTCMBalance,
        pETHMBalance,
      ] = await Promise.all([
        pBTCMContract['balanceOf(address)'](account),
        pETHMContract['balanceOf(address)'](account)
      ]);
      const pBTCMBalanceValue = ethers.utils.formatUnits(pBTCMBalance)
      const pETHMBalanceValue = ethers.utils.formatUnits(pETHMBalance)

      setFarms([
        { ...btcFarm, stakeBalance: pBTCMBalanceValue },
        { ...ethFarm, stakeBalance: pETHMBalanceValue },
      ])
    } catch (error) {
      console.log('[Error] getUserInfo => ', error)
    }
  }, [account, pBTCMContract, pETHMContract])

  useEffect(() => {
    if (pBTCMContract && pETHMContract) {
      getUserInfo()
    }

    if (isEmpty(account)) {
      setFarms((prev) => [
        { ...prev[0], stakeBalance: 0 },
        { ...prev[1], stakeBalance: 0 },
      ])
    }
  }, [pBTCMContract, pETHMContract, account, getUserInfo])

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
      const tokenWithdraw = await poolManagerContract.withdraw(pid, amount);
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

  return (
    <ContractContext.Provider
      value={{
        loading,
        farms,
        onStake,
        onWithdraw
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

  const {
    loading,
    farms,
    onStake,
    onWithdraw
  } = context

  return {
    loading,
    farms,
    onStake,
    onWithdraw
  }
}