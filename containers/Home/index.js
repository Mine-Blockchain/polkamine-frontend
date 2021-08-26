
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.primary,
    height: '100vh',
  },
}));

const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      Home Page
    </main>
  )
}

export default memo(Home)