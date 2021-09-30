import { createContext, useContext, useEffect } from 'react'

import * as mineAPI from 'services/api-mine'

const ContractContext = createContext(null)

const initTokens = [
  {
    isMNET: true,
    tokenName: 'MNET',
    price: 0.016,
    saleSupply: 314210194,
    apy: 0.1496,
    totalSupply: 2100000000,
    totalSupplyLink: 'https://www.mine.network',
    description: ''
  },
  {
    isMNET: false,
    tokenName: 'pBTCM',
    price: 67.49,
    saleSupply: 85390,
    totalSupply: 300000000,
    totalSupplyLink: 'https://www.mine.network',
    description: 'Each token represents 1TH/s BTC standardized hashrate'
  },
  {
    isMNET: false,
    tokenName: 'pETHM',
    price: 10.66,
    saleSupply: 199681.55,
    totalSupply: 1100000000,
    totalSupplyLink: 'https://www.mine.network',
    description: 'Each token represents 1MH/s ETH standardized hashrate'
  }
]

export function DashboardProvider({ children }) {
  // const [tokens, setTokens] = useState(initTokens);
  useEffect(() => {
    getPools()
  }, [])

  const getPools = async () => {
    try {
      const response = await mineAPI.getPools();
      console.log(response)
    } catch (error) {
      console.log('[Error] getPools => ', error)
    }
  }

  return (
    <ContractContext.Provider
      value={{
        tokens: initTokens
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

  const {
    tokens
  } = context

  return {
    tokens
  }
}