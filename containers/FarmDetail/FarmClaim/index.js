
import { memo } from 'react'

import FarmCardWrapper from '../Shared/FarmCardWrapper'
import FarmActionForm from '../Shared/FarmActionForm'

const FarmClaim = ({
  farm
}) => {
  return (
    <FarmCardWrapper>
      <FarmActionForm
        token={farm.tokenName}
        balance={0.000000}
        buttonLabel='Claim'
        description={`Available ${farm.tokenName} claim`}
      />
       <FarmActionForm
        token='MNET'
        balance={0.000000}
        buttonLabel='Claim'
        description={`Available MNET claim`}
      />
    </FarmCardWrapper >
  )
}

export default memo(FarmClaim)