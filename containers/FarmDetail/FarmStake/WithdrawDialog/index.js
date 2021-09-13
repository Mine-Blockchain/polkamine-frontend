
import { memo, useCallback } from 'react'
import { Typography } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'

import PolkaDialog from 'components/PolkaDialog'
import TokenTextField from 'components/UI/TextFields/TokenTextField'
import { BALANCE_VALID } from 'utils/constants/validations'
import GradientButton from 'components/UI/Buttons/GradientButton'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  label: {
    width: '100%',
    fontSize: 12,
    color: theme.custom.palette.border,
    padding: theme.spacing(1, 0),
  },
  submit: {
    width: 160,
    fontSize: 12,
  }
}));

const schema = yup.object().shape({
  balance: BALANCE_VALID
});

const WithdrawDialog = ({
  open,
  setOpen,
  farm
}) => {
  const classes = useStyles();

  const { control, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    console.log(data)
    setValue('balance', 0)
    setOpen(false);
  }

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <PolkaDialog
      open={open}
      title={`Withdraw ${farm.stake}`}
      onClose={handleClose}
    >
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={<TokenTextField />}
          name='balance'
          placeholder='Enter withdrawal amount'
          error={errors.balance?.message}
          onMax={() => setValue('balance', farm.stakeBalance)}
          control={control}
          defaultValue={''}
        />
        <Typography align='right' className={classes.label}>
          Unlocked {farm.stake}:0.000000
        </Typography>
        <GradientButton type='submit' className={classes.submit}>
          Withdraw
        </GradientButton>
      </form>
    </PolkaDialog>
  );
}

export default memo(WithdrawDialog)