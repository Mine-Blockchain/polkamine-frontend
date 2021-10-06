import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import CoinGecko from 'coingecko-api'

import { CONTRACTS, PROVIDER } from 'config'
import TOKEN_SALE_ABI from 'libs/abis/token-sale.json'
import MNET_ABI from 'libs/abis/mnet.json'
import P_BTC_ABI from 'libs/abis/p-btc.json'
import P_ETH_ABI from 'libs/abis/p-eth.json'

const ContractContext = createContext(null)

const mnetToken = {
  isMNET: true,
  tokenName: 'MNET',
  price: 0,
  saleSupply: 0,
  apy: 0.1496,
  totalSupply: 0,
  totalSupplyLink: 'https://www.mine.network',
  description: ''
}
const pBTCMToken = {
  isMNET: false,
  tokenName: 'pBTCM',
  price: 0,
  saleSupply: 0,
  totalSupply: 0,
  totalSupplyLink: 'https://www.mine.network',
  description: 'Each token represents 1TH/s BTC standardized hashrate'
}
const pETHMToken = {
  isMNET: false,
  tokenName: 'pETHM',
  price: 0,
  saleSupply: 0,
  totalSupply: 0,
  totalSupplyLink: 'https://www.mine.network',
  description: 'Each token represents 1MH/s ETH standardized hashrate'
}

const unsignedSaleContract = new ethers.Contract(CONTRACTS.TOKEN_SALE, TOKEN_SALE_ABI, PROVIDER)
const unsignedMNETContract = new ethers.Contract(CONTRACTS.MNET, MNET_ABI, PROVIDER)
const unsignedpBTCMContract = new ethers.Contract(CONTRACTS.pBTCM, P_BTC_ABI, PROVIDER)
const unsignedpETHMContract = new ethers.Contract(CONTRACTS.pETHM, P_ETH_ABI, PROVIDER)

export function DashboardProvider({ children }) {
  const [tokens, setTokens] = useState([mnetToken, pBTCMToken, pETHMToken]);

  useEffect(() => {
    getSupply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSupply = async () => {
    try {
      const CoinGeckoClient = new CoinGecko();

      const [
        pBTCPrice,
        pETHPrice,
        pBTCSupply,
        pETHSupply,
        pBTCSold,
        pETHSold,
        mnetTotalSupply,
        mnetInfo
      ] = await Promise.all([
        unsignedSaleContract.tokenPrice(CONTRACTS.pBTCM),
        unsignedSaleContract.tokenPrice(CONTRACTS.pETHM),
        unsignedSaleContract.tokenSupplyAmount(CONTRACTS.pBTCM),
        unsignedSaleContract.tokenSupplyAmount(CONTRACTS.pETHM),
        unsignedpBTCMContract.totalSupply(),
        unsignedpETHMContract.totalSupply(),
        unsignedMNETContract.totalSupply(),
        CoinGeckoClient.simple.price({
          ids: ['dai'],
          vs_currencies: ['usd'],
          include_market_cap: true
        })
      ]);

      const pBTCPriceValue = ethers.utils.formatUnits(pBTCPrice[1], 0)
      const pETHPriceValue = ethers.utils.formatUnits(pETHPrice[1], 0)
      const pBTCSupplyValue = ethers.utils.formatUnits(pBTCSupply)
      const pETHSupplyValue = ethers.utils.formatUnits(pETHSupply)
      const pBTCSoldValue = ethers.utils.formatUnits(pBTCSold)
      const pETHSoldValue = ethers.utils.formatUnits(pETHSold)
      const mnetTotalSupplyValue = ethers.utils.formatUnits(mnetTotalSupply)
      const { data: { dai = {} } = {} } = mnetInfo

      setTokens([
        { ...mnetToken, price: dai.usd, totalSupply: mnetTotalSupplyValue, saleSupply: dai.usd_market_cap },
        { ...pBTCMToken, price: pBTCPriceValue, totalSupply: pBTCSupplyValue, saleSupply: pBTCSoldValue },
        { ...pETHMToken, price: pETHPriceValue, totalSupply: pETHSupplyValue, saleSupply: pETHSoldValue }
      ])
    } catch (error) {
      console.log('[Error] getSupply => ', error)
    }
  }

  return (
    <ContractContext.Provider
      value={{
        tokens
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  return context
}