import { createContext, useContext } from 'react'

const ContractContext = createContext(null)

const initFarms = [
  {
    tokenName: 'BTC',
    boost: 1,
    staticAPY: 0.8141,
    stake: 'pBTC35A',
    earn: 'WBTC',
  },
  {
    tokenName: 'ETH',
    boost: 1,
    staticAPY: 0.0302,
    stake: 'pETH18C',
    earn: 'ETH',
  }
]

export function FarmProvider({ children }) {

  return (
    <ContractContext.Provider
      value={{
        farms: initFarms
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
    farms
  } = context

  return {
    farms
  }
}