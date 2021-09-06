import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: 460,
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset'
    },
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    height: 68,
    lineHeight: 'initial',
    padding: theme.spacing(3, 3, 0),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.text.secondary
  },
  closeIcon: {
    position: 'absolute',
    color: theme.palette.text.secondary,
    top: theme.spacing(1),
    right: theme.spacing(2)
  },
  dialogContent: {
    width: '100%',
    minWidth: '100%',
    minHeight: 90,
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      minWidth: 'unset',
    }
  },
  dialogActions: {
    display: 'flex',
    padding: theme.spacing(0, 2, 2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  button: {
    fontSize: 18,
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: theme.spacing(1, 0),
    }
  }
}));

const PolkaDialog = ({
  open,
  title,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  onClose,
  children,
  dialogClass,
  dialogTitleClass,
  titleTextClass,
  closeIconClass
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{
        paper: clsx(classes.paper, dialogClass)
      }}
      aria-labelledby='customized-dialog-title'
    >
      <DialogTitle
        id='customized-dialog-title'
        disableTypography
        align='center'
        className={clsx(classes.dialogTitle, dialogTitleClass)}
      >
        <Typography
          variant='h6'
          className={clsx(classes.title, titleTextClass)}
        >
          {title}
        </Typography>
        <IconButton
          edge='end'
          aria-label='close'
          className={clsx(classes.closeIcon, closeIconClass)}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {children}
      </DialogContent>
      {(!!cancelLabel || !!confirmLabel) &&
        <DialogActions
          disableSpacing
          className={classes.dialogActions}
        >
          {!!cancelLabel &&
            <ContainedButton
              autoFocus
              color='secondary'
              onClick={onCancel}
              className={classes.button}
            >
              {cancelLabel}
            </ContainedButton>
          }
          {!!confirmLabel &&
            <ContainedButton
              onClick={onConfirm}
              className={classes.button}
            >
              {confirmLabel}
            </ContainedButton>
          }
        </DialogActions>
      }
    </Dialog>
  );
}

export default memo(PolkaDialog)