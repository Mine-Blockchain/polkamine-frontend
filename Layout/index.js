
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

const Layout = ({
  children
}) => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      {children}
    </main>
  );
};

export default memo(Layout);
