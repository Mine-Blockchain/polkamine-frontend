import { memo } from 'react'
import { AppBar, Toolbar, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from 'components/Logo'
import NavBarMenu from './NavBarMenu'
import NavDropMenu from './NavDropMenu'
import ConnectWallet from './ConnectWallet'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxShadow: 'none',
    width: '100%',
    height: theme.custom.layout.topAppBarHeight,
    backgroundColor: theme.palette.background.primary
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    width: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  mnetBalance: {
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 50,
    padding: theme.spacing(1, 2),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  }
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position='relative'
      className={classes.appBar}
    >
      <Toolbar className={classes.toolBar}>
        <Logo />
        <div className={classes.container}>
          <NavBarMenu />

          <Hidden xsDown>
            <Typography className={classes.mnetBalance}>
              0 MNET
            </Typography>
          </Hidden>

          <ConnectWallet />
          <NavDropMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopAppBar);
