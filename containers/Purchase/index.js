
import { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import PurchaseTabs from './PurchaseTabs'
import PurchaseContainer from './PurchaseContainer'
import { useCommonStyles } from 'styles/use-styles'
import { PURCHASE_TABS } from 'utils/constants/purchase-tabs'

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
    margin: theme.spacing(7, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0)
    }
  }
}));

const Purchase = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  const [selectedTab, setSelectedTab] = useState(PURCHASE_TABS.pBTC35A)

  return (
    <main className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <Grid container spacing={5} className={classes.tokenContainer}>
          <Grid item xs={12} md={4} lg={3}>
            <PurchaseTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <PurchaseContainer selectedTab={selectedTab} />
          </Grid>
        </Grid>
      </div>
    </main>
  )
}

export default memo(Purchase)