
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
  const classes = useStyles();

  return (
    <SvgIcon viewBox={viewBox || '0 0 14 14'} {...rest} className={clsx(classes.root, className)}>
      <path d="M11.76 6.43001V9.86C11.7574 10.7556 11.4004 11.6138 10.7671 12.2471C10.1338 12.8804 9.27563 13.2374 8.38 13.24H3.88C2.98438 13.2374 2.1261 12.8804 1.4928 12.2471C0.859496 11.6138 0.502638 10.7556 0.5 9.86V5.35001C0.50527 4.45612 0.863319 3.60049 1.49634 2.96935C2.12936 2.3382 2.98611 1.98262 3.88 1.98H6.88" stroke="#00D5CF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.12988 7.61L13.2399 0.5" stroke="#00D5CF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.2401 5.15V0.5H8.6001" stroke="#00D5CF" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default memo(ExternalLinkIcon);