
import { memo } from 'react'
import { Grid } from '@material-ui/core'

const Purchase = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        Purchase Page
      </Grid>
    </Grid>
  )
}

export default memo(Purchase)