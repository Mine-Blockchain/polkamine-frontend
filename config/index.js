import { ethers } from 'ethers'

const IS_MAINNET = process.env.NETWORK === 'mainnet'

const CHAIN_ID = IS_MAINNET ? 1 : 3

const CONTRACTS = IS_MAINNET
  ? {
    MNET: '0x4e0343D1d65E06f31a3FF1200bB39FC55B84389E',
    USDT: '0x51071F965C51087519B1B8d8d1b53F36eaBa91cc',
    pBTCM: '0xfc9D5838a6450A96eE982BA7EE9cD20AC75cAA59',
    pETHM: '0x34D88Db5015ebDC75119803A9Dd17DC853C588Fb',
    wBTC: '0xB8f2fB81e7E535AABD13dDCBC96ad8B2249806e5',
    wETH: '0x90768c0b92A116c271bE5b4376E2245B52A243Fd',
    ADMIN: '0xFadF2d2E32527307dfBEa65ce18a53201036d2e9',
    POOL_MANAGER: '0x141b30baa729e7324Ed30A7a106EfF4D24a8d738',
    REWARD_DISTRIBUTOR: '0xD411Fcd301daF7c1E7a12541B8a474Dc12c886F9',
    TOKEN_SALE: '0x7e5b3ECc6978150543efa3527A5F4a9D1485AAbE'
  } : {
    MNET: '0x4e0343D1d65E06f31a3FF1200bB39FC55B84389E',
    USDT: '0x51071F965C51087519B1B8d8d1b53F36eaBa91cc',
    pBTCM: '0xfc9D5838a6450A96eE982BA7EE9cD20AC75cAA59',
    pETHM: '0x34D88Db5015ebDC75119803A9Dd17DC853C588Fb',
    wBTC: '0xB8f2fB81e7E535AABD13dDCBC96ad8B2249806e5',
    wETH: '0x90768c0b92A116c271bE5b4376E2245B52A243Fd',
    ADMIN: '0xFadF2d2E32527307dfBEa65ce18a53201036d2e9',
    POOL_MANAGER: '0x141b30baa729e7324Ed30A7a106EfF4D24a8d738',
    REWARD_DISTRIBUTOR: '0xD411Fcd301daF7c1E7a12541B8a474Dc12c886F9',
    TOKEN_SALE: '0x7e5b3ECc6978150543efa3527A5F4a9D1485AAbE'
  }
  
const PROVIDER = new ethers.providers.getDefaultProvider(IS_MAINNET ? 'homestead' : 'ropsten');

const ETHERSCAN_URL = IS_MAINNET ? 'https://etherscan.io' : 'https://ropsten.etherscan.io'

const PROXY_URL = 'https://vast-reef-88900.herokuapp.com'

export {
  IS_MAINNET,
  CHAIN_ID,
  CONTRACTS,
  PROVIDER,
  ETHERSCAN_URL,
  PROXY_URL
}