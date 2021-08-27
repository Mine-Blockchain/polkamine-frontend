
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(5, 0)
  },
  header: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  }
}));

const HomeHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.header} align='center'>
        The First Multi-chain Hashrate Token Protocol
      </Typography>
      <Typography variant='body2' align='center'>
        Purchase and stake hashrate certificates to earn
        mining yields and MNET rewards
      </Typography>
    </div>
  )
}

export default memo(HomeHeader)