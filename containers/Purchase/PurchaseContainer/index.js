
import { memo } from 'react'
import { Grid } from '@material-ui/core'

import TokenInfo from './TokenInfo'
import TokenPurchase from './TokenPurchase'
import TokenDescription from './TokenDescription'
import MinerParameters from './MinerParameters'
import MiningParameters from './MiningParameters'
import TokenAlert from './TokenAlert'

const PurchaseContainer = ({
  purchase
}) => {

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TokenInfo purchase={purchase} />
      </Grid>
      <Grid item xs={12}>
        <TokenPurchase purchase={purchase} />
      </Grid>
      <Grid item xs={12}>
        <TokenDescription purchase={purchase} />
      </Grid>
      <Grid item xs={12}>
        <MinerParameters purchase={purchase} />
      </Grid>
      <Grid item xs={12}>
        <MiningParameters purchase={purchase} />
      </Grid>
      <Grid item xs={12}>
        <TokenAlert purchase={purchase} />
      </Grid>
    </Grid>
  )
}

export default memo(PurchaseContainer)