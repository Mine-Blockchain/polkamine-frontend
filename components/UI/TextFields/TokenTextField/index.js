import React, { memo } from 'react';
import {
  OutlinedInput,
  Button,
  Typography,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: theme.spacing(1, 3),
      borderRadius: 100,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    errorInput: {
      border: `1px solid ${theme.palette.danger.main}`
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(1)
    },
    token: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    maxButton: {
      fontSize: 14,
      minWidth: 'unset',
      color: theme.palette.primary.main
    },
    divider: {
      height: 20,
      width: 1,
      margin: theme.spacing(0, 2),
      backgroundColor: theme.custom.palette.border
    },
    textField: {
      border: 'none',
    },
    input: {
      fontSize: 15,
      fontWeight: 'bold',
      padding: theme.spacing(0),
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.default,
      '&[type=number]': {
        '&::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0
        },
        '&::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0
        },
        MozAppearance: 'textfield'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 15,
      }
    },
    notchedOutline: {
      border: 'none'
    },
    error: {
      fontSize: 12
    }
  };
});

const TokenTextField = React.forwardRef(({
  token,
  error,
  onChange,
  onMax,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, { [classes.errorInput]: !!error })}>
      <div>
        <OutlinedInput
          inputRef={ref}
          variant='outlined'
          type='number'
          error={!!error}
          className={clsx(
            'form-control form-control-lg',
            classes.textField
          )}
          classes={{
            input: classes.input,
            notchedOutline: classes.notchedOutline
          }}
          onKeyDown={e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
          onChange={onChange}
          {...rest}
        />
        {!!error &&
          <Typography
            color='error'
            className={classes.error}
          >
            {error}
          </Typography>
        }
      </div>
      <div className={classes.control}>
        {token &&
          <Typography color='textSecondary' className={classes.token}>
            {token}
          </Typography>
        }
        <Divider orientation='vertical' className={classes.divider} />
        {!onMax &&
          <Button className={classes.maxButton} onClick={onMax} >
            MAX
          </Button>
        }
      </div>
    </div>
  );
})

export default memo(TokenTextField)