import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import TrendingPlayers from '@/components/TrendingPlayers'
import TrendingSkins from '@/components/TrendingSkins'

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
    <main className="mx-auto space-y-24 mb-24">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-4 col-span-1 pl-56">
          <h1 className="text-7xl font-semibold">
            See The Skins
            <br /> The Pros Use
          </h1>
          <p className="text-lg">
            Want to use the same skins as your favorite players?
            <br />
            See what they&apos;re rocking here.
          </p>
          <div className="space-x-4 mt-2">
            <PrimaryButtonLink text="View Players" href="/players" hasArrow />
            <SecondaryButtonLink text="Popular Skins" href="/skins" />
          </div>
        </div>

        <img alt="hero image" className="col-span-1" src="/hero_image.png" />
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        <TrendingSkins />
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">Featured Players</h2>
            <SecondaryButtonLink
              text="See All Players"
              href="/players"
              hasArrow
            />
          </div>
          <TrendingPlayers />
        </section>
      </div>
    </main>
  )
}
