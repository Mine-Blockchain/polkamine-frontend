
import { memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import { useFarm } from 'contexts/farm-context'
import FarmDetailHeader from './FarmDetailHeader'
import FarmStake from './FarmStake'
import FarmClaim from './FarmClaim'
import FarmAlert from './FarmAlert'
import { useCommonStyles } from 'styles/use-styles'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(5, 0),
    maxWidth: 840
  }
}));

const FarmDetail = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  const router = useRouter()
  const { farms } = useFarm()

  const farm = useMemo(() => farms.find((farm) => farm.tokenName === router.query.token)
    , [router.query.token, farms]);

  return (
    <main className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        {!isEmpty(farm) &&
          <>
            <FarmDetailHeader farm={farm} />
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <FarmStake farm={farm} />
              </Grid>
              <Grid item xs={12} md={6}>
                <FarmClaim farm={farm} />
              </Grid>
            </Grid>
            <FarmAlert farm={farm} />
          </>
        }
      </div>
    </main>
  )
}

export default memo(FarmDetail)