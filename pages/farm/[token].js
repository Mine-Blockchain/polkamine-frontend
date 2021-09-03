
import FarmDetail from 'containers/FarmDetail'
import { FarmProvider } from 'contexts/farm-context'

export default function FarmPage() {
  return (
    <FarmProvider>
      <FarmDetail />
    </FarmProvider>
  )
}