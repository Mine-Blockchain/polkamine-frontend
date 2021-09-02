
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
        <SvgIcon viewBox={viewBox || '0 0 18.93 18.93'} {...rest} className={clsx(classes.root, className)}>
          <g id="图层_4">
            <path fill="#fff" d="M9.47,0a9.47,9.47,0,1,0,9.46,9.47A9.48,9.48,0,0,0,9.47,0Zm7.86,6.61h-2.5a9.5,9.5,0,0,0-4.58-5.48A8.4,8.4,0,0,1,17.33,6.61Zm.51,2.86a8.23,8.23,0,0,1-.27,2H15a9.35,9.35,0,0,0,.25-2,9.3,9.3,0,0,0-.19-1.76h2.56A8.4,8.4,0,0,1,17.84,9.47Zm-16.75,0a8.4,8.4,0,0,1,.19-1.76H3.86a9.3,9.3,0,0,0-.18,1.76,9.35,9.35,0,0,0,.25,2H1.36A8.23,8.23,0,0,1,1.09,9.47Zm3.68,0A7.85,7.85,0,0,1,5,7.71H8.92v3.81H5A8.3,8.3,0,0,1,4.77,9.47ZM10,2.25a8.31,8.31,0,0,1,3.65,4.36H10ZM8.92,6.61H5.29A8.37,8.37,0,0,1,8.92,2.26Zm0,6v4.06A8.33,8.33,0,0,1,5.4,12.61Zm1.09,0h3.55A8.37,8.37,0,0,1,10,16.68Zm0-1.09V7.71h4a8.47,8.47,0,0,1,.21,1.76,8.8,8.8,0,0,1-.27,2ZM8.71,1.13A9.46,9.46,0,0,0,4.13,6.61H1.6A8.4,8.4,0,0,1,8.71,1.13Zm-7,11.48H4.24A9.49,9.49,0,0,0,8.71,17.8,8.38,8.38,0,0,1,1.71,12.61Zm8.54,5.19a9.49,9.49,0,0,0,4.47-5.19h2.5A8.4,8.4,0,0,1,10.25,17.8Z" />
          </g>
        </SvgIcon>
      </a>
    </Link>
  )
}

export default memo(WebIcon);
