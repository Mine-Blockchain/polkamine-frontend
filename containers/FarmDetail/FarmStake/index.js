
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
        balance={farm.stakeBalance}
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
          farm={farm}
          open={stakeModal}
          setOpen={setStakeModal}
        />
      }
      {withdrawModal &&
        <WithdrawDialog
          farm={farm}
          open={withdrawModal}
          setOpen={setWithdrawModal}
        />
      }
    </FarmCardWrapper >
  )
}

export default memo(FarmStake)