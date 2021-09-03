
import { memo } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import LeftArrowIcon from 'components/Icons/LeftArrowIcon'
import PolkaTokenIcon from 'components/PolkaTokenIcon'
import LINKS from 'utils/constants/links'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(4, 0)
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: theme.spacing(1, 0)
  },
  description: {
    fontSize: 12,
    marginBottom: theme.spacing(1),
    color: theme.custom.palette.border,
    '& span': {
      fontWeight: 'bold',
      color: theme.palette.text.secondary
    }
  },
  balance: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.custom.palette.border,
  }
}));

const FarmDetailHeader = ({
  farm
}) => {
  const classes = useStyles()
  const router = useRouter()

  const backHandler = () => {
    router.push(LINKS.FARM.HREF)
  }

  return (
    <div className={classes.root}>
      <LeftArrowIcon
        className={classes.icon}
        onClick={backHandler}
      />
      <PolkaTokenIcon
        token={farm.tokenName}
        size={75}
      />
      <Typography color='textSecondary' className={classes.name} align='center'>
        {farm.tokenName}
      </Typography>
      <Typography className={classes.description} align='center'>
        Stake <span>{farm.stake}</span> Earn <span>{farm.earn}</span>
      </Typography>
      <Typography align='center' className={classes.balance}>
        {`1 ${farm.stake} = 0.00000000 ${farm.earn}/day`}
      </Typography>
    </div >
  )
}

export default memo(FarmDetailHeader)