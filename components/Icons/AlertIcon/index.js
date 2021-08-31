
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
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 14 14'} {...rest} className={clsx(classes.root, className)}>
        <path d="M6.86993 12.89C10.1395 12.89 12.7899 10.2395 12.7899 6.96999C12.7899 3.70046 10.1395 1.04999 6.86993 1.04999C3.60041 1.04999 0.949951 3.70046 0.949951 6.96999C0.949951 10.2395 3.60041 12.89 6.86993 12.89Z" stroke="#00D5CF" strokeMiterlimit="10" />
        <path d="M6.87012 6.96997V10.3" stroke="#00D5CF" strokeMiterlimit="10" />
        <path d="M6.87012 4.23999V5.78999" stroke="#00D5CF" strokeMiterlimit="10" />
    </SvgIcon>
  )
}

export default memo(AlertIcon);