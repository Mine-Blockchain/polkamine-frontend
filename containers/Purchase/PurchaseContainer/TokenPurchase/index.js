
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { usePurchases } from 'contexts/purchase-context'
import TokenTextField from 'components/UI/TextFields/TokenTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import { BALANCE_VALID } from 'utils/constants/validations'

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
  purchase
}) => {
  const classes = useStyles()
  const { usdtBalance, onPurchase } = usePurchases()

  const { control, handleSubmit, errors, setValue, watch } = useForm({
    resolver: yupResolver(schema)
  });
  const balance = watch('balance');

  const onSubmit = async (data) => {
    await onPurchase(data.balance, purchase)
    setValue('balance', '')
  }

  const maxHandler = () => {
    const maxValue = purchase.tokenPrice ? usdtBalance / purchase.tokenPrice : 0
    setValue('balance', maxValue)
  }

  return (
    <div className={classes.root}>
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography align='right' className={classes.label}>
          USDT Balance: <span>{usdtBalance}</span>
        </Typography>
        <Controller
          as={<TokenTextField />}
          name='balance'
          placeholder='Enter purchase amount'
          token={purchase.value}
          onMax={maxHandler}
          error={errors.balance?.message}
          control={control}
          defaultValue={''}
        />
        <Typography align='left' className={classes.label}>
          Volume: <span>{(balance || 0) * purchase.tokenPrice}</span> USDT
        </Typography>
        <ContainedButton type='submit' className={classes.submit}>
          Purchase
        </ContainedButton>
      </form>
    </div>
  )
}

export default memo(TokenPurchase)