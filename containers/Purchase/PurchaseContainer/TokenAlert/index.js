
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
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

const TokenAlert = () => {
  const classes = useStyles()

  return (
    <Typography className={classes.alert}>
      <GradientCircleIcon className={classes.icon} />
      Aboved data will be renewed daily, please refer to the actual data for the final settlement.
    </Typography>
  )
}

export default memo(TokenAlert)