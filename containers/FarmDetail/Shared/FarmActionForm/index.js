
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import PolkaTokenIcon from 'components/PolkaTokenIcon'
import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  balance: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: theme.spacing(1, 0)
  },
  description: {
    fontSize: 12,
    marginBottom: theme.spacing(1),
    color: theme.custom.palette.border
  },
  button: {
    width: 120,
    marginTop: theme.spacing(2),
  }
}));

const FarmActionForm = ({
  token,
  balance,
  description,
  buttonLabel,
  onForm = () => { }
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <PolkaTokenIcon
        token={token}
        size={50}
      />
      <Typography color='textSecondary' className={classes.balance} align='center'>
        {parseFloat(balance).toLocaleString()}
      </Typography>
      <Typography color='textSecondary' className={classes.description} align='center'>
        {description}
      </Typography>
      {buttonLabel &&
        <ContainedButton className={classes.button} onClick={onForm}>
          {buttonLabel}
        </ContainedButton>
      }
    </div >
  )
}

export default memo(FarmActionForm)