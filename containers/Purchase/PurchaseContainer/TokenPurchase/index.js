
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import TokenTextField from 'components/UI/TextFields/TokenTextField'
import { BALANCE_VALID } from 'utils/constants/validations'
import ContainedButton from 'components/UI/Buttons/ContainedButton';

const schema = yup.object().shape({
  balance: BALANCE_VALID
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 388
  },
  label: {
    width: '100%',
    fontSize: 12,
    color: theme.custom.palette.border,
    padding: theme.spacing(1, 0),
    '& span': {
      fontWeight: 'bold',
      color: theme.palette.text.secondary
    }
  },
  submit: {
    width: 160,
    fontSize: 12,
    textTransform: 'unset'
  }
}));

const TokenPurchase = ({
  selectedTab
}) => {
  const classes = useStyles()

  const { control, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    console.log(data)
    setValue('balance', '')
  }

  return (
    <div className={classes.root}>
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography align='right' className={classes.label}>
          USDT Balance: <span>0.0</span>
        </Typography>
        <Controller
          as={<TokenTextField />}
          name='balance'
          placeholder='Enter purchase amount'
          token={selectedTab.VALUE}
          error={errors.balance?.message}
          control={control}
          defaultValue={''}
        />
        <Typography align='left' className={classes.label}>
          Volume: <span>0.0</span> USDT
        </Typography>
        <ContainedButton type='submit' className={classes.submit}>
          Purchase
        </ContainedButton>
      </form>
    </div>
  )
}

export default memo(TokenPurchase)