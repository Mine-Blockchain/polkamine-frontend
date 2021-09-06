
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import PolkaTokenIcon from 'components/PolkaTokenIcon'
import AlertIcon from 'components/Icons/AlertIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  mnetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(3, 6, 3, 3),
    border: `1px solid ${theme.custom.palette.border}`,
    borderRadius: 30,
    backgroundColor: theme.palette.background.secondary,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 3, 6, 3),
      flexDirection: 'column',
    }
  },
  rewardContainer: {
    width: '100%',
    maxWidth: 360,
    marginLeft: -25,
    padding: theme.spacing(8, 2),
    border: `1px solid ${theme.custom.palette.border}`,
    borderRadius: 24,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: -25,
    }
  },
  colContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 14,
    marginTop: theme.spacing(1),
    color: theme.custom.palette.border
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  rewardLabel: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const MnetFarm = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.mnetContainer}>
        <div className={classes.colContainer}>
          <PolkaTokenIcon
            token='MNET'
            size={65}
          />
          <Typography color='textSecondary' className={classes.name} align='center'>
            MNET Plus
          </Typography>
          <Typography className={classes.label} align='center'>
            Static APY: 81.41%
          </Typography>
        </div>
        <div className={classes.colContainer}>
          <Typography color='textSecondary' className={classes.value} align='center'>
            0.00000
          </Typography>
          <Typography className={classes.label} align='center'>
            MNET staked
          </Typography>
        </div>
        <div className={classes.colContainer}>
          <Typography color='textSecondary' className={classes.value} align='center'>
            0.00000
          </Typography>
          <Typography className={classes.label} align='center'>
            Available claim
          </Typography>
        </div>
      </div>
      <div className={classes.rewardContainer}>
        <div className={classes.rewardLabel}>
          <Typography className={classes.label}>
            Next distribution
          </Typography>
          <Typography color='textSecondary' className={classes.name}>
            00:03:39:38
          </Typography>
        </div>
        <div className={classes.rewardLabel}>
          <Typography className={classes.label}>
            Rewards accumulation
          </Typography>
          <Typography color='textSecondary' className={classes.name}>
            0.00000000 WBTC
            <br />
            0.000000000 ETH <AlertIcon />
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default memo(MnetFarm)