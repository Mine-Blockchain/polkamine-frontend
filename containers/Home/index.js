
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import { useDashboard } from 'contexts/dashboard-context'
import HomeHeader from './HomeHeader'
import TokenCard from './TokenCard'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.primary
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0)
    }
  },
  tokenContainer: {
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0)
    }
  }
}));

const Home = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  const { tokens } = useDashboard()

  return (
    <main className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <HomeHeader />
        <Grid container spacing={6} className={classes.tokenContainer}>
          {tokens.map((token) =>
            <Grid key={token.tokenName} item xs={12} sm={6} md={4}>
              <TokenCard token={token} />
            </Grid>
          )}
        </Grid>
      </div>
    </main>
  )
}

export default memo(Home)