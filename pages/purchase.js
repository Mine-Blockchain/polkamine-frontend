
import Purchase from 'containers/Purchase'
import { PurchaseProvider } from 'contexts/purchase-context'

export default function PurchasePage() {
  return (
    <PurchaseProvider>
      <Purchase />
    </PurchaseProvider>
  )
}