import { createContext, useContext, useMemo, useEffect, useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

import { CONTRACTS, CHAIN_ID, IS_MAINNET, PROVIDER } from 'config'
import { usePopup } from 'contexts/popup-context'
import USDT_ABI from 'libs/abis/usdt.json'
import TOKEN_SALE_ABI from 'libs/abis/token-sale.json'
import { isEmpty } from 'utils/helpers/utility'
import MESSAGES from 'utils/constants/messages'

const USDT_DECIMAL = IS_MAINNET ? 6 : 18

const pBTC35A = {
  label: 'POW BTC-35W/T',
  value: 'pBTC35A',
  baseToken: 'BTC',
  token: CONTRACTS.pBTC35A,
  tokenPrice: 0,
  tokenSupply: 0,
  sold: 249673,
  available: 85348,
  description: 'Each pBTC35A represents 1MH/s 35W/M BTC mining power',
  miner: {
    efficiency: 1.8,
    dissipationRate: 0,
    onlineRate: 0,
    netEarnings: 0
  },
  mining: [
    {
      key: 'TWAP Price(24H)',
      value: '$1981'
    },
    {
      key: 'Electricity Price',
      value: '$0.0800/kWh'
    },
    {
      key: 'Network Difficulty',
      value: '15,556,093,717,703'
    },
    {
      key: 'Transaction fee',
      value: '1.37%'
    },
    {
      key: 'Mining pool fee',
      value: 'PPS + 1.00%'
    }
  ],
  alerts: [
    'Aboved data will be renewed daily, please refer to the actual data for the final settlement.',
    'MINE will settle mining yield in WBTC, which is the BTC minted on ethereum with 100% collateralized by BTC.'
  ]
}

const pETH18C = {
  label: 'POW ETH-1.8W/M',
  value: 'pETH18C',
  baseToken: 'ETH',
  token: CONTRACTS.pETH18C,
  tokenPrice: 0,
  tokenSupply: 0,
  sold: 249673,
  available: 85348,
  description: 'Each pETH18C represents 1MH/s 1.8W/M ETH mining power',
  miner: {
    efficiency: 1.8,
    dissipationRate: 0,
    onlineRate: 0,
    netEarnings: 0
  },
  mining: [
    {
      key: 'WAP Price(24H)',
      value: '$1981'
    },
    {
      key: 'Mining pool fee',
      value: 'PPS + 1.00%'
    }
  ],
  alerts: [
    'Aboved data will be renewed daily, please refer to the actual data for the final settlement.'
  ]
}

const unsignedSaleContract = new ethers.Contract(CONTRACTS.TOKEN_SALE, TOKEN_SALE_ABI, PROVIDER)
const ContractContext = createContext(null)

export function PurchaseProvider({ children }) {
  const { account, library, chainId } = useWeb3React();
  const { setPopUp } = usePopup();

  const [loading, setLoading] = useState(false);
  const [usdtBalance, setUSDTBalance] = useState(0);
  const [purchases, setPurchases] = useState([pBTC35A, pETH18C]);

  const usdtContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.USDT, USDT_ABI, library.getSigner()) : null, [library])
  const saleContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.TOKEN_SALE, TOKEN_SALE_ABI, library.getSigner()) : null, [library])

  useEffect(() => {
    getSupply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSupply = async () => {
    try {
      const [
        pBTCPrice,
        pETHPrice,
        pBTCSupply,
        pETHSupply
      ] = await Promise.all([
        unsignedSaleContract.tokenPrice(CONTRACTS.pBTC35A),
        unsignedSaleContract.tokenPrice(CONTRACTS.pETH18C),
        unsignedSaleContract.tokenSupplyAmount(CONTRACTS.pBTC35A),
        unsignedSaleContract.tokenSupplyAmount(CONTRACTS.pETH18C),
      ]);

      const pBTCPriceValue = ethers.utils.formatUnits(pBTCPrice[1], 0)
      const pETHPriceValue = ethers.utils.formatUnits(pETHPrice[1], 0)
      const pBTCSupplyValue = ethers.utils.formatUnits(pBTCSupply)
      const pETHSupplyValue = ethers.utils.formatUnits(pETHSupply)

      setPurchases([
        { ...pBTC35A, tokenPrice: pBTCPriceValue, tokenSupply: pBTCSupplyValue },
        { ...pETH18C, tokenPrice: pETHPriceValue, tokenSupply: pETHSupplyValue }
      ])
    } catch (error) {
      console.log('[Error] getSupply => ', error)
    }
  }

  useEffect(() => {
    if (library && chainId !== CHAIN_ID) {
      setPopUp({
        title: 'Network Error',
        text: `Switch to ETH Chain`
      })
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [library, chainId]);

  const getUserInfo = useCallback(async () => {
    try {
      const [
        usdtBalance,
      ] = await Promise.all([
        usdtContract['balanceOf(address)'](account)
      ]);
      const usdtBalanceValue = ethers.utils.formatUnits(usdtBalance, USDT_DECIMAL)

      setUSDTBalance(usdtBalanceValue);
    } catch (error) {
      console.log('[Error] getUserInfo => ', error)
    }
  }, [account, usdtContract])

  useEffect(() => {
    if (!isEmpty(usdtContract)) {
      getUserInfo()
    }

    if (isEmpty(account)) {
      setUSDTBalance(0)
    }
  }, [usdtContract, account, getUserInfo])

  const onPurchase = async (balance, purchase) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { token, tokenPrice } = purchase;
      const amount = ethers.utils.parseEther(balance.toString());
      const usdtBalance = balance * tokenPrice;
      const usdtAmount = ethers.utils.parseEther(usdtBalance.toString(), USDT_DECIMAL);

      const tokenBalance = await usdtContract.balanceOf(account);
      if (usdtAmount.gt(tokenBalance)) {
        setPopUp({
          title: 'Balance Error',
          text: `Please check balance of USDT on your wallet.`
        })
        setLoading(false)
        return;
      }

      const tokenAllowance = await usdtContract.allowance(account, CONTRACTS.TOKEN_SALE);
      if (usdtAmount.gt(tokenAllowance)) {
        const tokenApprove = await usdtContract.approve(CONTRACTS.TOKEN_SALE, usdtAmount);
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

      const tokenSale = await saleContract.purchase(token, amount, { gasLimit: 3000000 });
      const transactionSale = await tokenSale.wait(1);

      if (transactionSale.status) {
        setPopUp({
          title: 'Success',
          text: `You have purchased successfully`
        })
        getUserInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in purchased Transaction`
        })
      }
    } catch (error) {
      console.error('onPurchase =>', error);
    }
    setLoading(false);
  }

  return (
    <ContractContext.Provider
      value={{
        loading,
        usdtBalance,
        purchases,
        onPurchase
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export function usePurchases() {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  const {
    loading,
    usdtBalance,
    purchases,
    onPurchase
  } = context

  return {
    loading,
    usdtBalance,
    purchases,
    onPurchase
  }
}