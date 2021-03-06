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
    MNET: '0x51c863645484c36d4BCE0d26F7B33F86fB893150',
    USDT: '0xF5B3BEB43B2001295Fa3f245E537ea4188262C15',
    pBTCM: '0x59b844402463172f3bAf526AE1086D1A2A78c669',
    pETHM: '0x4cefca7fF8C717B09eDB2C351D3F9941EBe8E04E',
    wBTC: '0x487348cBD3d2789D5FB2D200C3Bf19689219a92b',
    wETH: '0x5f7aF376f2B42EC12cF73CcbD9FA083aD7Cea2eA',
    ADMIN: '0xbc82E170437Eb152881f6724b7C175f60D41Ef70',
    POOL_MANAGER: '0xeAb098E3D7aeb5F5E35E490E0725b5e87CCB8b09',
    REWARD_DISTRIBUTOR: '0x1145937d30a98143f42b6F77a2692DFEfbFFA647',
    TOKEN_SALE: '0x1C0bF39461059a5f6F277637A34E32CE45034e9A'
  }

const PROVIDER = new ethers.providers.getDefaultProvider(IS_MAINNET ? 'homestead' : 'ropsten');

const ETHERSCAN_URL = IS_MAINNET ? 'https://etherscan.io' : 'https://ropsten.etherscan.io'

const PROXY_URL = 'https://jktesting.ddns.net'

export {
  IS_MAINNET,
  CHAIN_ID,
  CONTRACTS,
  PROVIDER,
  ETHERSCAN_URL,
  PROXY_URL
}