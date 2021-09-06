
import { memo, useState } from 'react'

import FarmCardWrapper from '../Shared/FarmCardWrapper'
import FarmActionForm from '../Shared/FarmActionForm'
import StakeDialog from './StakeDialog'
import WithdrawDialog from './WithdrawDialog'

const FarmStake = ({
  farm
}) => {
  const [stakeModal, setStakeModal] = useState(false)
  const [withdrawModal, setWithdrawModal] = useState(false)

  return (
    <FarmCardWrapper isStaking>
      <FarmActionForm
        token={farm.stake}
        balance={0.000000}
        buttonLabel='Stake'
        description={`Locked ${farm.stake}`}
        onForm={() => setStakeModal(true)}
      />
      <FarmActionForm
        token={farm.stake}
        balance={0.000000}
        buttonLabel='Withdraw'
        description={`Unlocked ${farm.stake}`}
        onForm={() => setWithdrawModal(true)}
      />
      {stakeModal &&
        <StakeDialog
          token={farm.stake}
          open={stakeModal}
          setOpen={setStakeModal}
        />
      }
      {withdrawModal &&
        <WithdrawDialog
          token={farm.stake}
          open={withdrawModal}
          setOpen={setWithdrawModal}
        />
      }
    </FarmCardWrapper >
  )
}

export default memo(FarmStake)