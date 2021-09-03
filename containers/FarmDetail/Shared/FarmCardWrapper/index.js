
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    padding: theme.spacing(3),
    border: `1px solid ${theme.custom.palette.border}`,
    borderRadius: 20,
    backgroundColor: theme.palette.background.secondary,
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
  children
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isStaking && 
        <Typography className={classes.staking}>
          Staking
        </Typography>
      }
      {children}
    </div>
  )
}

export default memo(FarmCardWrapper)