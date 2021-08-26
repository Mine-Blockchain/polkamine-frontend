import { ethers } from 'ethers'

const IS_MAINNET = process.env.NETWORK === 'mainnet'

const C_CHAIN_ID = IS_MAINNET ? 43114 : 43113

const CONTRACTS = IS_MAINNET
  ? {
    MNET: '0x914556b16c1220e4af63084dB1acbD4e6f9c65Aa',
    WETH: '0xFc371bA1E7874Ad893408D7B581F3c8471F03D2C',
  } : {
    MNET: '0x914556b16c1220e4af63084dB1acbD4e6f9c65Aa',
    WETH: '0xFc371bA1E7874Ad893408D7B581F3c8471F03D2C',
  }


const PROVIDER = new ethers.providers.getDefaultProvider('https://api.avax.network/ext/bc/C/rpc');

export {
  IS_MAINNET,
  C_CHAIN_ID,
  CONTRACTS,
  PROVIDER
}