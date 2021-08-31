
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import PolkaTokenIcon from 'components/PolkaTokenIcon'

const useStyles = makeStyles((theme) => ({
  info: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2),
    '& span': {
      fontSize: 15,
      fontWeight: 'bold'
    }
  }
}));

const PurchaseTokenItem = ({
  token
}) => {
  const classes = useStyles()

  return (
    <div className={classes.info}>
      <PolkaTokenIcon
        token={token.VALUE}
        size={35}
      />
      <Typography className={classes.label}>
        <span>{token.VALUE}</span>
        <br /> {token.LABEL}
      </Typography>
    </div>
  )
}

export default memo(PurchaseTokenItem)