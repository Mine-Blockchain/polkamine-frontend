
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

const TokenAlert = ({
  purchase
}) => {
  const classes = useStyles()

  return purchase.alerts.map((alert, index) => (
    <Typography key={index} className={classes.alert}>
      <GradientCircleIcon className={classes.icon} />
      {alert}
    </Typography>
  ))
}

export default memo(TokenAlert)