
import Farm from 'containers/Farm'
import { FarmProvider } from 'contexts/farm-context'

export default function FarmPage() {
  return (
    <FarmProvider>
      <Farm />
    </FarmProvider>
  )
}