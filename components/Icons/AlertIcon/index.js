
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: 14,
    height: 14
  }
}));

const AlertIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <SvgIcon viewBox={viewBox || '0 0 12.84 12.84'} {...rest} className={clsx(classes.root, className)}>
      <g id='4' data-name='4'>
        <path fill='#00d5cf' d='M6.42,12.84a6.42,6.42,0,1,1,6.42-6.42A6.43,6.43,0,0,1,6.42,12.84ZM6.42,1a5.42,5.42,0,1,0,5.42,5.42A5.42,5.42,0,0,0,6.42,1Z' />
        <rect fill='#00d5cf' x='5.92' y='6.42' width='1' height='3.33' />
        <rect fill='#00d5cf' x='5.92' y='3.69' width='1' height='1.55' />
      </g>
    </SvgIcon>
  )
}

export default memo(AlertIcon)