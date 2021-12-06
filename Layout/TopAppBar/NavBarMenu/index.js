
import { memo } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Hidden
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';

import TOP_BAR_MENU from 'utils/constants/top-bar-menu'
import ButtonLink from 'components/UI/Buttons/ButtonLink'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    fontSize: 14,
    textTransform: 'none',
    paddingRight: theme.spacing(5),
    color: theme.palette.text.primary
  },
  selected: {
    color: theme.custom.palette.pink
  }
}));

const NavBarMenu = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Hidden smDown>
      <div className={classes.root}>
        {TOP_BAR_MENU.map((item, index) => (
          <Button
            key={index}
            href={item.HREF}
            component={ButtonLink}
            className={clsx(classes.item, { [classes.selected]: item.HREF === router.pathname })}
          >
            {item.TITLE}
          </Button>
        ))}
      </div>
    </Hidden>
  );
};

export default memo(NavBarMenu);