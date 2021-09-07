
import { memo } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

import SOCIALS from 'utils/constants/social'

const useStyles = makeStyles(() => ({
  root: {
    width: 24,
    height: 24
  }
}));

const TwitterIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Link
      href={SOCIALS.TWITTER.HREF}>
      <a aria-label={SOCIALS.TWITTER.LABEL} target='_blank' rel='noreferrer'>
        <SvgIcon viewBox={viewBox || '0 0 22 19'} {...rest} className={clsx(classes.root, className)}>
          <path d='M10.44 5.96003C8.70076 5.95752 6.98123 5.59144 5.39174 4.88539C3.80224 4.17933 2.37787 3.14883 1.21001 1.85999C1.21001 1.85999 -0.619985 4.97003 2.75002 7.65003C2.07939 7.65305 1.41656 7.50614 0.810013 7.22004C0.851051 8.23049 1.24126 9.19539 1.91414 9.95033C2.58702 10.7053 3.50092 11.2035 4.50002 11.36C3.89085 11.6026 3.22721 11.6752 2.58 11.57C2.91567 12.4176 3.5052 13.1407 4.26784 13.6401C5.03047 14.1396 5.9289 14.391 6.84001 14.36C5.99329 15.1315 4.99738 15.7213 3.9138 16.0928C2.83023 16.4643 1.68197 16.6097 0.539993 16.52C2.01665 17.3688 3.6512 17.9069 5.34331 18.1012C7.03541 18.2955 8.74939 18.142 10.38 17.65C10.38 17.65 19.26 15.46 19.09 4.46003C19.9085 3.78338 20.6053 2.97164 21.15 2.06001C20.41 2.46725 19.5986 2.72867 18.76 2.83003C19.5997 2.22372 20.2011 1.34292 20.46 0.340036C19.6585 0.917594 18.746 1.32278 17.78 1.53004C17.1707 0.960561 16.4153 0.571166 15.5979 0.405221C14.7806 0.239277 13.9332 0.30328 13.15 0.590036C13.15 0.590036 9.68002 1.72003 10.44 5.96003Z' fill='white' />
        </SvgIcon>
      </a>
    </Link>
  )
}

export default memo(TwitterIcon);