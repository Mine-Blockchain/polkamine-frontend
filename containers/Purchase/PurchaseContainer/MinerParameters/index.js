
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, Typography } from '@material-ui/core';

import AlertIcon from 'components/Icons/AlertIcon'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1)
  },
  root: {
    borderRadius: theme.spacing(2),
    border: `0.5px solid ${theme.custom.palette.border}`,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5)
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    },
  },
  label: {
    fontSize: 14,
    color: theme.custom.palette.border,
    marginRight: theme.spacing(0.5)
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  rowDivider: {
    height: 1,
    backgroundColor: theme.custom.palette.border,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}));

const MinerParameters = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>
        Miner parameters
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.rowContainer}>
          <Grid item xs={12} md={3} className={classes.labelContainer}>
            <Typography className={classes.label}>
              Efficiency
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.labelContainer}>
            <Typography className={classes.label}>
              Dissipation rate
            </Typography>
            <AlertIcon />
          </Grid>
          <Grid item xs={12} md={3} className={classes.labelContainer}>
            <Typography className={classes.label}>
              Online rate
            </Typography>
            <AlertIcon />
          </Grid>
          <Grid item xs={12} md={3} className={classes.labelContainer}>
            <Typography className={classes.label}>
              Net Earnings/T
            </Typography>
            <AlertIcon />
          </Grid>
        </Grid>
        <Divider className={classes.rowDivider} />
        <Grid container spacing={3} className={classes.rowContainer}>
          <Grid item xs={12} md={3}>
            <Typography className={classes.value} color='textSecondary'>
              1.8W/T
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.value} color='textSecondary'>
              0.0%
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.value} color='textSecondary'>
              0.0%
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.value} color='primary'>
              0.000000000 BTC/Day
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default memo(MinerParameters)