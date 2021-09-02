
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import PolkaTokenIcon from 'components/PolkaTokenIcon'
import ExternalLinkIcon from 'components/Icons/ExternalLinkIcon'
import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(3),
    border: `1px solid ${theme.custom.palette.border}`,
    borderRadius: 30,
    backgroundColor: theme.palette.background.secondary,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  rowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0),
    width: '100%'
  },
  colContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  boostContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 14px ${theme.palette.primary.main}`,
    borderRadius: 12,
    width: 60,
    height: 60
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: theme.spacing(1, 0)
  },
  label: {
    fontSize: 14,
    marginBottom: theme.spacing(1),
    color: theme.custom.palette.border
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    height: 12,
    width: 12
  },
  button: {
    width: 120,
    margin: theme.spacing(2, 0),
  }
}));

const FarmItem = ({
  farm
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.rowContainer}>
        <div className={classes.colContainer}>
          <PolkaTokenIcon
            token={farm.tokenName}
            size={65}
          />
          <Typography color='textSecondary' className={classes.name} align='center'>
            {farm.tokenName}
          </Typography>
        </div>

        <div className={classes.boostContainer}>
          <PolkaTokenIcon
            token='MNET'
            size={14}
          />
          <Typography color='primary' variant='h5' align='center'>
            {farm.boost}X
          </Typography>
        </div>
      </div>

      <div className={classes.rowContainer}>
        <div className={classes.colContainer}>
          <Typography className={classes.label} align='center'>
            Static APY
          </Typography>
          <Typography color='primary' className={classes.value} align='center'>
            {(farm.staticAPY * 100).toLocaleString()}%
          </Typography>
        </div>
        <div className={classes.colContainer}>
          <Typography className={classes.label} align='center'>
            Stake
          </Typography>
          <Typography color='primary' className={classes.value} align='center'>
            {farm.stake} <ExternalLinkIcon className={classes.icon} />
          </Typography>
        </div>
        <div className={classes.colContainer}>
          <Typography className={classes.label} align='center'>
            Earn
          </Typography>
          <Typography color='textSecondary' className={classes.value} align='center'>
            {farm.earn} + <PolkaTokenIcon token='MNET' size={12} /> MNET
          </Typography>
        </div>
      </div>
      <ContainedButton className={classes.button}>
        Select
      </ContainedButton>
    </div>
  )
}

export default memo(FarmItem)