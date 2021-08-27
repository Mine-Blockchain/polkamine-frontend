
import { memo } from 'react'
import { Grid } from '@material-ui/core'

const Farm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        Farm Page
      </Grid>
    </Grid>
  )
}

export default memo(Farm)