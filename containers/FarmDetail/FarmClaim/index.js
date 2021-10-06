
import { memo, useCallback } from 'react'
import { ethers } from 'ethers'
import { makeStyles } from '@material-ui/core/styles'

import { useFarm } from 'contexts/farm-context'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import FarmCardWrapper from '../Shared/FarmCardWrapper'
import FarmActionForm from '../Shared/FarmActionForm'

const useStyles = makeStyles((theme) => ({
  button: {
    width: 120,
    marginTop: theme.spacing(2),
  }
}));

const FarmClaim = ({
  farm
}) => {
  const classes = useStyles()
  const { onClaim } = useFarm()

  const rewardAmount = ethers.utils.formatUnits(farm?.rewardAmount || '0')
  const doubleRewardAmount = ethers.utils.formatUnits(farm?.doubleRewardAmount || '0')

  const claimHandler = useCallback(() => {
    onClaim(farm)
  }, [farm, onClaim])

  return (
    <FarmCardWrapper
      footer={
        <ContainedButton
          className={classes.button}
          onClick={claimHandler}
        >
          Claim
        </ContainedButton>
      }
    >
      <FarmActionForm
        token={farm.tokenName}
        balance={rewardAmount}
        description={`Available ${farm.tokenName} claim`}
      />
      <FarmActionForm
        token='MNET'
        balance={doubleRewardAmount}
        description={`Available MNET claim`}
      />
    </FarmCardWrapper >
  )
}

export default memo(FarmClaim)