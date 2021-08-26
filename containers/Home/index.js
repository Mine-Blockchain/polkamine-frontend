
import { memo } from 'react'
import { Grid } from '@material-ui/core'

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        Home Page
      </Grid>
    </Grid>
  )
}

export default memo(Home)