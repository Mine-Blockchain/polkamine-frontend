
import { memo } from 'react'
import { Grid } from '@material-ui/core'

import TokenInfo from './TokenInfo'
import TokenDescription from './TokenDescription'
import MinerParameters from './MinerParameters'
import MiningParameters from './MiningParameters'
import TokenAlert from './TokenAlert'

const PurchaseContainer = ({
  selectedTab
}) => {

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TokenInfo selectedTab={selectedTab} />
      </Grid>
      <Grid item xs={12}>
        <TokenDescription selectedTab={selectedTab} />
      </Grid>
      <Grid item xs={12}>
        <MinerParameters selectedTab={selectedTab} />
      </Grid>
      <Grid item xs={12}>
        <MiningParameters selectedTab={selectedTab} />
      </Grid>
      <Grid item xs={12}>
        <TokenAlert selectedTab={selectedTab} />
      </Grid>
    </Grid>
  )
}

export default memo(PurchaseContainer)