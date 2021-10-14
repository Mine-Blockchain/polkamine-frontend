
import { memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { ETHERSCAN_URL } from 'config'
import PolkaTokenIcon from 'components/PolkaTokenIcon'
import ExternalLinkIcon from 'components/Icons/ExternalLinkIcon'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import LINKS from 'utils/constants/links'

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
  contractLink: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'unset',
    cursor: 'pointer',
    color: theme.palette.primary.main
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
  const router = useRouter()

  const detailHandler = useCallback(() => {
    router.push(
      LINKS.FARM_DETAIL.HREF,
      LINKS.FARM_DETAIL.HREF.replace('[token]', farm.tokenName)
    )
  }, [farm, router])

  return (
    <div className={classes.root}>
      <div className={classes.rowContainer}>
        <div className={classes.colContainer}>
          <PolkaTokenIcon
            token={farm.tokenName}
            size={65}
          />
          <Typography
            align='center'
            color='textSecondary'
            className={classes.name}
          >
            {farm.tokenName}
          </Typography>
        </div>

        <div className={classes.boostContainer}>
          <PolkaTokenIcon
            token='MNET'
            size={14}
          />
          <Typography
            variant='h5'
            color='primary'
            align='center'
          >
            {farm.boost}X
          </Typography>
        </div>
      </div>

      <div className={classes.rowContainer}>
        {/* <div className={classes.colContainer}>
          <Typography className={classes.label} align='center'>
            Static APY
          </Typography>
          <Typography color='primary' className={classes.value} align='center'>
            {(farm.staticAPY * 100).toLocaleString()}%
          </Typography>
        </div> */}
        <div className={classes.colContainer}>
          <Typography className={classes.label} align='center'>
            Stake
          </Typography>
          <a
            href={`${ETHERSCAN_URL}/address/${farm.stakeAddress}`}
            className={classes.contractLink}
            target='_blank'
            rel="noreferrer"
          >
            {farm.stake} <ExternalLinkIcon className={classes.icon} />
          </a>
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
      <ContainedButton className={classes.button} onClick={detailHandler}>
        Select
      </ContainedButton>
    </div>
  )
}

export default memo(FarmItem)