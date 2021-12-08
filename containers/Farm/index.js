
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import { useFarm } from 'contexts/farm-context'
import FarmHeader from './FarmHeader'
import FarmItem from './FarmItem'
// import MnetFarm from './MnetFarm'
import { useCommonStyles } from 'styles/use-styles'

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
    margin: theme.spacing(5, 0, 10),
    maxWidth: 978,
  }
}));

const Farm = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  const { farms } = useFarm()

  return (
    <main className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FarmHeader />
          </Grid>
          {/* <Grid item xs={12}>
            <MnetFarm />
          </Grid> */}
          {farms.map((item) => (
            <Grid key={item.tokenName} item xs={12} md={6}>
              <FarmItem farm={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  )
}

export default memo(Farm)