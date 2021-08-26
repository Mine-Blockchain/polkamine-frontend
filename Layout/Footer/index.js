
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Logo from 'components/Logo'
import FooterContact from './FooterContact'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    background: `linear-gradient(90deg, ${theme.custom.palette.lightBlue} 0%, ${theme.custom.palette.blue} 100%)`
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: theme.custom.layout.maxFooterWidth,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div container className={classes.container}>
        <FooterContact />
        <Logo />
      </div>
    </footer>
  );
};

export default memo(Footer);
