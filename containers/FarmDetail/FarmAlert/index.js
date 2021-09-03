
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import GradientCircleIcon from 'components/Icons/GradientCircleIcon'

const useStyles = makeStyles((theme) => ({
  alert: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: theme.custom.palette.border,
    margin: theme.spacing(4, 0)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

const FarmAlert = ({
  farm
}) => {
  const classes = useStyles()

  return (
    <Typography className={classes.alert}>
      <GradientCircleIcon className={classes.icon} />
      {`As you unstake hashrate certificates from the pool, the smart contract 
      will automatically harvest the ${farm.earn} and MNET.`}
    </Typography>
  )
}

export default memo(FarmAlert)