
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

const ExternalLinkIcon = ({
  className,
  viewBox,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <SvgIcon viewBox={viewBox || '0 0 13.74 13.74'} {...rest} className={clsx(classes.root, className)}>
      <g id='5'>
        <path fill='#00d5cf' d='M8.39,13.74H3.88A3.88,3.88,0,0,1,0,9.86V5.35A3.88,3.88,0,0,1,3.88,1.48H6.93a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-3A2.88,2.88,0,0,0,1,5.35V9.86a2.88,2.88,0,0,0,2.88,2.88H8.39a2.88,2.88,0,0,0,2.87-2.88V6.44a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5V9.86A3.88,3.88,0,0,1,8.39,13.74Z' />
        <path fill='#00d5cf' d='M6.13,8.11a.5.5,0,0,1-.35-.85L12.89.15a.48.48,0,0,1,.7,0,.48.48,0,0,1,0,.7L6.48,8A.47.47,0,0,1,6.13,8.11Z' />
        <path fill='#00d5cf' d='M13.24,5.65a.5.5,0,0,1-.5-.5V1H8.59a.5.5,0,0,1,0-1h4.65a.5.5,0,0,1,.5.5V5.15A.5.5,0,0,1,13.24,5.65Z' />
      </g>
    </SvgIcon>
  )
}

export default memo(ExternalLinkIcon);