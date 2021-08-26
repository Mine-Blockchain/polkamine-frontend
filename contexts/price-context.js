import { createContext, useContext, useState, useEffect } from 'react'
import CoinGecko from 'coingecko-api'

const ContractContext = createContext(null)

export function PriceProvider({ children }) {
  const [prices, setPrices] = useState({
    MNET: 0,
  });

  useEffect(() => {
    const getPrices = async () => {
      const CoinGeckoClient = new CoinGecko();
      const { data: response } = await CoinGeckoClient.simple.price({
        ids: [
          'polkamarkets',
        ],
        vs_currencies: ['usd'],
      });

      const prices = {
        MNET: response['polkamarkets']?.usd || 0,
      };
      setPrices(prices);
    };

    getPrices();
    //setInterval(() => getPrices(), 120000);
  }, []);

  return (
    <ContractContext.Provider value={{ prices }} >
      {children}
    </ContractContext.Provider>
  )
}

export function usePrices() {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  const { prices } = context

  return { prices }
}