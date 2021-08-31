
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, Typography } from '@material-ui/core';

import ExternalLinkIcon from 'components/Icons/ExternalLinkIcon'
import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import PurchaseTokenItem from 'containers/Purchase/Shared/PurchaseTokenItem'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(2),
    border: `0.5px solid ${theme.custom.palette.border}`
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  tokenInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  colDivider: {
    height: 40,
    width: 1,
    margin: theme.spacing(0, 2),
    backgroundColor: theme.custom.palette.border
  },
  price: {
    fontSize: 12,
    color: theme.custom.palette.border,
    '& span': {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
    }
  },
  rowDivider: {
    height: 1,
    backgroundColor: theme.custom.palette.border
  }
}));

const TokenInfo = ({
  selectedTab
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.rowContainer}>
        <div className={classes.tokenInfo}>
          <PurchaseTokenItem token={selectedTab} />
          <Divider orientation='vertical' className={classes.colDivider} />
          <Typography className={classes.price}>
            Price<br />
            <span>160.0</span>USDT
          </Typography>
        </div>
        <OutlinedButton endIcon={<ExternalLinkIcon />}>
          View contract
        </OutlinedButton>
      </div>
      <Divider className={classes.rowDivider} />
      <Grid container spacing={3} className={classes.rowContainer}>
        <Grid item xs={12} md={4}>
          <Typography className={classes.price}>
            Supply<br />
            <span>120,000,000.0</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.price}>
            Sold<br />
            <span>100,000,318.4</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.price}>
            Available<br />
            <span>199,876.4</span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default memo(TokenInfo)