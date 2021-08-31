import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Typography } from '@material-ui/core'

import TelegramIcon from 'components/Icons/TelegramIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import GithubIcon from 'components/Icons/GithubIcon'
import MediumIcon from 'components/Icons/MediumIcon'
import EmailIcon from 'components/Icons/EmailIcon'
import WebIcon from 'components/Icons/WebIcon'

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0, 1)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  borderLine: {
    height: 4,
    borderRadius: 2,
    background: `linear-gradient(to right, ${theme.custom.palette.pink}, ${theme.custom.palette.yellow})`
  },
  copyright: {
    fontSize: 12,
    marginTop: theme.spacing(1.5),
    color: theme.palette.background.default,
    textDecoration: 'unset',
    '& span': {
      paddingRight: theme.spacing(2)
    }
  },
}));

const FooterContact = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.socialContainer}>
        <TelegramIcon className={classes.socialIcon} />
        <TwitterIcon className={classes.socialIcon} />
        <GithubIcon className={classes.socialIcon} />
        <MediumIcon className={classes.socialIcon} />
        <EmailIcon className={classes.socialIcon} />
        <WebIcon className={classes.socialIcon} />
      </div>
      <Divider className={classes.borderLine} />
      <Typography className={classes.copyright}>
        <span>Copyright</span> 
        <span>2021 The Miine Network</span> 
        <span>All Rights Reserved</span> 
      </Typography>
    </div>
  );
};

export default memo(FooterContact);
