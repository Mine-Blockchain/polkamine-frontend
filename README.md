<div align="center">
<h1>MINE - Network 🎣</h1>

<p>The first Multi-chain Hashrate Token Protocol.</p>
</div>

---

## Summary

This project is the App Page for Mine and  a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Local http://localhost:3000

---

## Environment
- Reset NETWORK value in .env file

```bash
VERSION='1.0-rc'
APPNAME='Mine'

NETWORK=mainnet or testnet
```
- Update API and contract addresses of mainnet in config file

```bash
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

  const PROXY_URL = 'https://vast-reef-88900.herokuapp.com'
```
---
## Installation

```bash
yarn install
yarn dev
yarn build
yarn start
yarn deploy:vercel
```
---
## Development stacks

- React.js(NEXT.js) + Material-UI
---

## Tutorials

### Home Page
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<img src="https://raw.githubusercontent.com/Mine-Blockchain/polkamine-frontend/main/public/assets/images/tutorial/home.jpg" width="1000px;" alt=""/>

On Home page, user can see detail infos of MNET, pBTCM and PETHM

### Wallet Connect
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<img src="https://raw.githubusercontent.com/Mine-Blockchain/polkamine-frontend/main/public/assets/images/tutorial/connect%20wallet.jpg" width="1000px;" alt=""/>

On this APP, user can use Metamask and WalletLink. Please click connect button on right of Top APP Bar.

### Purchase Page
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<img src="https://raw.githubusercontent.com/Mine-Blockchain/polkamine-frontend/main/public/assets/images/tutorial/Purchase.jpg" width="1000px;" alt=""/>

On Purchase Page, user can buy pETHM and PBTCM with USDT.

### Farms Page
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<img src="https://raw.githubusercontent.com/Mine-Blockchain/polkamine-frontend/main/public/assets/images/tutorial/farms.jpg" width="1000px;" alt=""/>

On Farms Page, user can select pool for staking or withdrawing.


### Farm Detail Page
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<img src="https://raw.githubusercontent.com/Mine-Blockchain/polkamine-frontend/main/public/assets/images/tutorial/farm-detail.jpg" width="1000px;" alt=""/>

On Farm detail Page, user can stake, withdraw and claim rewards. When user click button, user can see following Modal.

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<img src="https://raw.githubusercontent.com/Mine-Blockchain/polkamine-frontend/main/public/assets/images/tutorial/stake.jpg" width="1000px;" alt=""/>


---
## Contributors ✨

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/beowulf518"><img src="https://avatars.githubusercontent.com/u/31363138?v=4" width="100px;" alt=""/><br /><sub><b>beowulf518</b></sub></a><br />📖</td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->


