import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
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
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: theme.custom.palette.border,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  value: {
    fontSize: 14,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    }
  },
  rowDivider: {
    height: 1,
    backgroundColor: theme.custom.palette.border,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}));

const MiningParameters = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>
        Mining parameters
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.rowContainer}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.label}>
              WAP Price(24H)
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.label}>
              Mining pool fee
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.rowDivider} />
        <Grid container spacing={3} className={classes.rowContainer}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.value} color='textSecondary'>
              $1981
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.value} color='textSecondary'>
              PPS+ 1.00%
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default memo(MiningParameters)