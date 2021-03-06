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

const MiningParameters = ({
  purchase
}) => {
  const classes = useStyles()
  const { mining } = purchase;
  const mdLength = mining.length === 2 ? 6 : 2;

  return (
    <>
      <Typography className={classes.title}>
        Mining parameters
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.rowContainer}>
          {mining.map((item, index) => (
            <Grid key={index} item xs={12} md={mdLength}>
              <Typography className={classes.label}>
                {item.key}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Divider className={classes.rowDivider} />

        <Grid container spacing={3} className={classes.rowContainer}>
          {mining.map((item, index) => (
            <Grid key={index} item xs={12} md={mdLength}>
              <Typography className={classes.value} color='textSecondary'>
                {item.value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default memo(MiningParameters)