
import Home from 'containers/Home'
import { DashboardProvider } from 'contexts/dashboard-context'

export default function HomePage() {
  return (
    <DashboardProvider>
      <Home />
    </DashboardProvider>
  )
}