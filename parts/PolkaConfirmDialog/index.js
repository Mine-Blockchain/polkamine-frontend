
import { memo } from 'react'
import { Typography } from '@material-ui/core'

import PolkaDialog from 'components/PolkaDialog'

const PolkaConfirmDialog = ({
  text = 'Are you sure to proceed this operation?',
  ...rest
}) => {
  return (
    <PolkaDialog {...rest}>
      <Typography color='textSecondary' variant='h5' align='center'>
        {text}
      </Typography>
    </PolkaDialog>
  );
}

export default memo(PolkaConfirmDialog)