
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { POOL_ICON_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: theme.palette.danger.main,
    margin: theme.spacing(1.5, 0)
  },
  description: {
    fontWeight: 'bold',
    color: theme.palette.danger.main,
  },
  icon: {
    width: 95,
    height: 119,
    cursor: 'pointer'
  }
}));

const FarmHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        alt='pool'
        src={POOL_ICON_IMAGE_PATH}
        className={classes.icon}
      />
      <Typography variant='h4' className={classes.header} align='center'>
        Select a pool
      </Typography>
      <Typography variant='body2' align='center' className={classes.description}>
        Stake hashrate certificate and governance token MNET to earn either WBTC or ETH and MNET.
      </Typography>
    </div >
  )
}

export default memo(FarmHeader)