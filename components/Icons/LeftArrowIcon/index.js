
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 19,
    height: 19
  }
}));

const LeftArrowIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <SvgIcon viewBox={viewBox || '0 0 18 18'} {...rest} className={clsx(classes.root, className)}>
      <path d='M16.7 16.57L9.04004 8.91L16.7 1.25' stroke='url(#paint0_linear)' strokeWidth='2.49' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M8.91 16.57L1.25 8.91L8.91 1.25' stroke='url(#paint1_linear)' strokeWidth='2.49' strokeLinecap='round' strokeLinejoin='round' />
      <defs>
        <linearGradient id='paint0_linear' x1='12.87' y1='6.64755e-08' x2='12.87' y2='17.81' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#00D1CE' />
          <stop offset='1' stopColor='#A390E4' />
        </linearGradient>
        <linearGradient id='paint1_linear' x1='6823.94' y1='9877.44' x2='6960.36' y2='9877.44' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#00D1CE' />
          <stop offset='1' stopColor='#A390E4' />
        </linearGradient>
      </defs>
    </SvgIcon>
  )
}

export default memo(LeftArrowIcon);