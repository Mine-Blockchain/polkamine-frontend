import { createContext, useContext, useMemo, useEffect, useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

import { CONTRACTS, C_CHAIN_ID } from 'config'
import { usePopup } from 'contexts/popup-context'
import ERC20_ABI from 'libs/abis/erc20.json'
import { isEmpty } from 'utils/helpers/utility'

const ContractContext = createContext(null)

export function ContractProvider({ children }) {
  const { account, library, chainId } = useWeb3React();
  const { setPopUp } = usePopup();

  const [balances, setBalances] = useState({});

  const isWrongNetwork = useMemo(() => chainId !== C_CHAIN_ID, [chainId])
  const mnetContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.MNET, ERC20_ABI, library.getSigner()) : null, [library])

  useEffect(() => {
    if (library && chainId !== C_CHAIN_ID) {
      setPopUp({
        title: 'Network Error',
        text: `Switch to Polka Chain`
      })
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [library, chainId]);

  const getBalanceInfo = useCallback(async () => {
    try {
      const [
        mnetBalance
      ] = await Promise.all([
        mnetContract['balanceOf(address)'](account)
      ]);
      const mnetBalanceValue = ethers.utils.formatUnits(mnetBalance, 18)

      setBalances({
        mnet: mnetBalanceValue
      });
    } catch (error) {
      console.log('[Error] getBalanceInfo => ', error)
    }
  }, [account, mnetContract])

  useEffect(() => {
    if (!isEmpty(mnetContract)) {
      getBalanceInfo()
    }

    if (isEmpty(account)) {
      setBalances({})
    }
  }, [mnetContract, account, getBalanceInfo])

  return (
    <ContractContext.Provider
      value={{
        isWrongNetwork,
        balances,
        getBalanceInfo
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export function useContracts() {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  const {
    isWrongNetwork,
    balances,
    getBalanceInfo
  } = context

  return {
    isWrongNetwork,
    balances,
    getBalanceInfo
  }
}