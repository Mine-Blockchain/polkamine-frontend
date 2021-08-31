
import { memo } from 'react'
import Link from 'next/link'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import SOCIALS from 'utils/constants/social'

const useStyles = makeStyles(() => ({
  root: {
    width: 24,
    height: 24
  }
}));

const WebIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Link href={SOCIALS.WEB.HREF}>
      <a aria-label={SOCIALS.WEB.LABEL} target='_blank' rel='noreferrer'>
        <SvgIcon viewBox={viewBox || '0 0 20 20'} {...rest} className={clsx(classes.root, className)}>
          <path d="M10.34 18.82C15.2664 18.82 19.26 14.8264 19.26 9.89998C19.26 4.9736 15.2664 0.97998 10.34 0.97998C5.4136 0.97998 1.41998 4.9736 1.41998 9.89998C1.41998 14.8264 5.4136 18.82 10.34 18.82Z" stroke="white" strokeWidth="1.09" strokeMiterlimit="10" />
          <path d="M10.36 18.03C13.265 18.03 15.62 14.3901 15.62 9.90002C15.62 5.40994 13.265 1.77002 10.36 1.77002C7.45497 1.77002 5.10001 5.40994 5.10001 9.90002C5.10001 14.3901 7.45497 18.03 10.36 18.03Z" stroke="white" strokeWidth="1.09" strokeMiterlimit="10" />
          <path d="M10.34 0.97998V18.82" stroke="white" strokeWidth="1.09" strokeMiterlimit="10" />
          <path d="M1.72998 7.59003H18.93" stroke="white" strokeWidth="1.09" strokeMiterlimit="10" />
          <path d="M1.72998 12.5H18.93" stroke="white" strokeWidth="1.09" strokeMiterlimit="10" />
        </SvgIcon>
      </a>
    </Link>
  )
}

export default memo(WebIcon);
