
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import PolkaTokenIcon from 'components/PolkaTokenIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(2, 2.5),
    border: `2px solid ${theme.custom.palette.border}`,
    borderRadius: 8
  },
  tokenInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: theme.spacing(3)
  },
  description: {
    fontSize: 14,
    paddingTop: theme.spacing(0.5)
  },
  link: {
    fontSize: 14,
    color: theme.palette.text.primary
  }
}));

const TokenCard = ({
  token
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.tokenInfo}>
        <Typography className={classes.name}>
          {token.tokenName}
        </Typography>
        <PolkaTokenIcon
          token={token.tokenName}
          size={65}
        />
      </div>

      <Typography className={classes.title}>
        {`$ ${token.price}`}
      </Typography>
      <Typography className={classes.description}>
        Current Price
      </Typography>

      <Typography className={classes.title}>
        {token.saleSupply.toLocaleString()}
        {token.isMNET && `(${token.apy * 100}%)`}
      </Typography>
      <Typography className={classes.description}>
        {token.isMNET ? 'Circulating Supply' : 'On Sale'}
      </Typography>

      <Typography className={classes.title}>
        {token.totalSupply.toLocaleString()}
      </Typography>
      <a href={token.totalSupplyLink} className={classes.link}>
        {token.isMNET ? 'Total Supply' : 'Supply'}
      </a>

      <Typography className={classes.description}>
        {token.description}
      </Typography>
    </div>
  )
}

export default memo(TokenCard)