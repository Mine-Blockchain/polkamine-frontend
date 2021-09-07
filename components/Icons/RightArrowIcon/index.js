
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

const RightArrowIcon = ({
  className,
  viewBox,
  selected = false,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <SvgIcon viewBox={viewBox || '0 0 19 19'} {...rest} className={clsx(classes.root, className)}>
      {selected
        ? (
          <>
            <path d='M1.56006 2.01999L9.23007 9.67999L1.56006 17.34' stroke='url(#paint0_linear)' strokeWidth='2.49' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M9.35986 2.01999L17.0199 9.67999L9.35986 17.34' stroke='url(#paint1_linear)' strokeWidth='2.49' strokeLinecap='round' strokeLinejoin='round' />
            <defs>
              <linearGradient id='paint0_linear' x1='5.40007' y1='18.58' x2='5.40007' y2='0.769989' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#00D1CE' />
                <stop offset='1' stopColor='#A390E4' />
              </linearGradient>
              <linearGradient id='paint1_linear' x1='38600.7' y1='-52636.7' x2='38737.1' y2='-52636.7' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#00D1CE' />
                <stop offset='1' stopColor='#A390E4' />
              </linearGradient>
            </defs>
          </>
        )
        : (
          <>
            <path d='M1.56006 1.57001L9.23007 9.23001L1.56006 16.89' stroke='#CCCCCC' strokeWidth='2.49' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M9.35999 1.57001L17.02 9.23001L9.35999 16.89' stroke='#CCCCCC' strokeWidth='2.49' strokeLinecap='round' strokeLinejoin='round' />
          </>
        )
      }
    </SvgIcon>
  )
}

export default memo(RightArrowIcon);