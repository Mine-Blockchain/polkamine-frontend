
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { CHAIN_ID } from 'config'

const NETWORK_URL = 'https://api.avax.network/ext/bc/C/rpc'

const walletlink = new WalletLinkConnector({
  url: NETWORK_URL,
  appName: 'Mine',
  appLogoUrl: 'https://raw.githubusercontent.com/Snowball-Finance/app-v2/master/public/assets/images/logo.png'
})

const injected = new InjectedConnector({ supportedChainIds: [CHAIN_ID] })
const trustWallet = new InjectedConnector({ supportedChainIds: [CHAIN_ID] })

export {
  injected,
  trustWallet,
  walletlink
}