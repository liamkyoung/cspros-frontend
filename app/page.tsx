import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import TrendingPlayers from '@/components/TrendingPlayers'
import TrendingSkins from '@/components/TrendingSkins'
import HeroSection from './HeroSection'
import AppStatsDisplay from './AppStatsDisplay'
/*
    NEEDS: MOST USED 4 SKINS ACROSS ALL SKINS
    ROUTE: /api/Skin/GetPopularSkinsForAllWeapons (May need to replace)
*/

/*
    NEEDS: TOP 4 PLAYERS WITH MOST KILLS (IN GAMES IN THE PAST 7 DAYS)
    ROUTE: /api/Player/TrendingPlayers
*/

// Get all games the past 3 days
// Join /w SkinUsages
// Get Skins with most kills for games in past 7 days

// Get all games the past 3 days
// Join /w SkinUsages
// Get Players with most kills for games in past 7 days

export default function Home() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <div className="mx-auto px-4 space-y-24">
        <TrendingSkins />
        <TrendingPlayers />
        <AppStatsDisplay />
      </div>
    </main>
  )
}
