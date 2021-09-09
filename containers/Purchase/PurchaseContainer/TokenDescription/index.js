
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  price: {
    fontSize: 12,
    color: theme.custom.palette.border,
    '& span': {
      fontSize: 18,
      color: theme.palette.text.secondary
    }
  }
}));

const TokenDescription = ({
  purchase
}) => {
  const classes = useStyles()

  return (
    <Typography className={classes.price}>
      <span>Description</span><br />
      {purchase.description}
    </Typography>
  )
}

export default memo(TokenDescription)