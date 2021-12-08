
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14
  }
}));

const HomeHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        align='center'
        className={classes.header}
      >
        The First Multi-chain Hashrate Token Protocol
      </Typography>
      <Typography
        variant='body2'
        align='center'
        className={classes.description}
      >
        Purchase and stake hashrate certificates to earn mining yields and MNET rewards
      </Typography>
    </div>
  )
}

export default memo(HomeHeader)