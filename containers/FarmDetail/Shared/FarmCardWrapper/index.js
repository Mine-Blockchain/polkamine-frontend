
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    padding: theme.spacing(3),
    border: `1px solid ${theme.custom.palette.border}`,
    borderRadius: 20,
    backgroundColor: theme.palette.background.secondary
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  staking: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    padding: theme.spacing(1),
    borderRadius: 20,
    background: 'linear-gradient(90deg, #00D1CE 0%, #7F7EFF 100%)'
  }
}));

const FarmCardWrapper = ({
  isStaking = false,
  children,
  footer
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isStaking &&
        <Typography className={classes.staking}>
          Staking
        </Typography>
      }
      <div className={classes.container}>
        {children}
      </div>
      {footer}
    </div>
  )
}

export default memo(FarmCardWrapper)