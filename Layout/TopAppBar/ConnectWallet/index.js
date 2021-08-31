import { memo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useWallets } from 'contexts/wallet-context'
import PolkaIdenticon from 'components/PolkaIdenticon'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import getEllipsis from 'utils/helpers/getEllipsis'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    border: `1.5px solid ${theme.palette.text.primary}`,
    borderRadius: 50,
  },
  balance: {
    padding: theme.spacing(0, 1)
  },
  accountContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.75),
    borderRadius: 50,
    backgroundColor: theme.custom.palette.darkBlue,
  },
  account: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
  }
}));

const ConnectWallet = () => {
  const classes = useStyles()
  const { setIsWalletDialog } = useWallets()
  const { account, active, error, deactivate } = useWeb3React();

  const walletHandler = () => {
    if ((active || error)) {
      deactivate();
      return
    }
    setIsWalletDialog(true)
  }

  return (
    <div className={classes.root}>
      <Typography
        variant='body2'
        color='textPrimary'
        className={classes.balance}
      >
        0 ETH
      </Typography>
      {(active || error)
        ? (
          <div
            className={classes.accountContainer}
            onClick={walletHandler}
          >
            <PolkaIdenticon value={account} size={25} />
            <Typography
              variant='caption'
              color='textPrimary'
              className={classes.account}
            >
              {getEllipsis(account || '')}
            </Typography>
          </div>
        ) : (
          <ContainedButton
            onClick={walletHandler}
          >
            Connect
          </ContainedButton>
        )}
    </div>

  );
};

export default memo(ConnectWallet);
