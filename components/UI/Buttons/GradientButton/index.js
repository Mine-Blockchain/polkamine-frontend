
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles(theme => ({
  primary: {
    color: theme.palette.text.primary,
    background: 'linear-gradient(90deg, #D83089 0%, #D93387 25%, #DA3D80 44%, #DD4D74 60.99%, #E16463 76.99%, #E5814D 90.99%, #E9963E 99.99%)'
  },
}));

const GradientButton = React.forwardRef(({
  color = 'primary',
  className,
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <ContainedButton
      ref={ref}
      className={clsx(className, classes[color])}
      {...rest}
    >
      {children}
    </ContainedButton>
  );
});

export default memo(GradientButton);
