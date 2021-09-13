
import { memo, useMemo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import { usePurchases } from 'contexts/purchase-context'
import PolkaLoading from 'components/PolkaLoading'
import PurchaseTabs from './PurchaseTabs'
import PurchaseContainer from './PurchaseContainer'
import { useCommonStyles } from 'styles/use-styles'
import { PURCHASE_TABS } from 'utils/constants/purchase-tabs'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
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
  const { loading, purchases } = usePurchases()

  const [selectedTab, setSelectedTab] = useState(PURCHASE_TABS.pBTCM)

  const selectedPurchase = useMemo(() =>
    purchases.find((purchase) => purchase.value === selectedTab.value)
    , [purchases, selectedTab])

  return (
    <main className={classes.root}>
      {loading && <PolkaLoading loading={loading} />}
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <Grid container spacing={5} className={classes.tokenContainer}>
          <Grid item xs={12} md={4} lg={3}>
            <PurchaseTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </Grid>

          {!isEmpty(selectedPurchase) &&
            <Grid item xs={12} md={8} lg={9}>
              <PurchaseContainer purchase={selectedPurchase} />
            </Grid>
          }
        </Grid>
      </div>
    </main>
  )
}

export default memo(Purchase)