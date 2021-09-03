
import { memo } from 'react'

import FarmCardWrapper from '../Shared/FarmCardWrapper'
import FarmActionForm from '../Shared/FarmActionForm'

const FarmStake = ({
  farm
}) => {
  return (
    <FarmCardWrapper isStaking>
      <FarmActionForm
        token={farm.stake}
        balance={0.000000}
        buttonLabel='Stake'
        description={`Locked ${farm.stake}`}
      />
       <FarmActionForm
        token={farm.stake}
        balance={0.000000}
        buttonLabel='Withdraw'
        description={`Unlocked ${farm.stake}`}
      />
    </FarmCardWrapper >
  )
}

export default memo(FarmStake)