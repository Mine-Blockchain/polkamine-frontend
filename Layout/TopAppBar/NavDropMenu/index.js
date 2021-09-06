
import { memo, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Menu,
  MenuItem,
  Hidden,
  IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import TOP_BAR_MENU from 'utils/constants/top-bar-menu'

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: 120,
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(0)
  },
  menu: {
    width: 25,
    height: 25,
    color: theme.palette.text.primary,
  },
  item: {
    borderRadius: 4,
    color: theme.palette.text.primary,
  }
}));

const NavDropMenu = () => {
  const classes = useStyles();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const itemHandler = useCallback((item) => () => {
    router.push(item.HREF)
    setAnchorEl(null);
  }, [router, setAnchorEl]);

  return (
    <>
      <Hidden mdUp>
        <IconButton
          edge='end'
          aria-label='settings'
          onClick={handleClick}
        >
          <MenuIcon className={classes.menu} />
        </IconButton>
        <Menu
          id='customized-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          classes={{
            paper: classes.paper
          }}
        >
          <div>
            {TOP_BAR_MENU.map((item, index) => (
              <MenuItem
                key={index}
                className={classes.item}
                onClick={itemHandler(item)}
              >
                {item.TITLE}
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Hidden>
    </>
  );
};

export default memo(NavDropMenu);