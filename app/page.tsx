import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import TrendingPlayers from '@/components/TrendingPlayers'
import TrendingSkins from '@/components/TrendingSkins'
import HeroSection from './HeroSection'
import AppStatsDisplay from './AppStatsDisplay'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="mx-auto px-4 lg:px-32 space-y-24">
        <AppStatsDisplay />
        <TrendingPlayers />
        <TrendingSkins />
      </div>
    </main>
  )
}
