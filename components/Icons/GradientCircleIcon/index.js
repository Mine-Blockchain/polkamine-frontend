
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 15,
    height: 15
  }
}));

const GradientCircleIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 15 15'} {...rest} className={clsx(classes.root, className)}>
      <path d="M7.37 14.74C11.4403 14.74 14.74 11.4403 14.74 7.37C14.74 3.29966 11.4403 0 7.37 0C3.29966 0 0 3.29966 0 7.37C0 11.4403 3.29966 14.74 7.37 14.74Z" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="7.37" x2="14.74" y2="7.37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D1CE" />
          <stop offset="1" stopColor="#7F7EFF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  )
}

export default memo(GradientCircleIcon);