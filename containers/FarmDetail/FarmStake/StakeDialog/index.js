
import { memo, useCallback } from 'react'
import { Typography } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'

import { useFarm } from 'contexts/farm-context'
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

const StakeDialog = ({
  open,
  setOpen,
  farm
}) => {
  const classes = useStyles();
  const { onStake } = useFarm()

  const { control, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    await onStake(data.balance, farm)
    setValue('balance', 0)
    setOpen(false);
  }

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <PolkaDialog
      open={open}
      title={`Deposit ${farm.stake}`}
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
          placeholder='Enter stake amount'
          error={errors.balance?.message}
          onMax={() => setValue('balance', farm.stakeBalance)}
          control={control}
          defaultValue={''}
        />
        <Typography align='right' className={classes.label}>
          {`Locked ${farm.stake}:${farm.stakeBalance}`}
        </Typography>
        <GradientButton type='submit' className={classes.submit}>
          Stake
        </GradientButton>
      </form>
    </PolkaDialog>
  );
}

export default memo(StakeDialog)