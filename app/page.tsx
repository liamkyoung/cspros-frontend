import SkinDisplay from '@/components/SkinDisplay'
import Image from 'next/image'
import Link from 'next/link'
import { WeaponSkinData } from '@/types'
import { DummySkins } from '@/data/skinData'
import { DummyPlayers } from '@/data/playerData'
import PlayerDisplay from '@/components/PlayerDisplay'
import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'

/*
    NEEDS: MOST USED 4 SKINS ACROSS ALL SKINS
    ROUTE: 
*/

/*
    NEEDS: TOP 4 PLAYERS WITH MOST KILLS
    ROUTE: 
*/

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
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">Trending Skins</h2>
            <SecondaryButtonLink href="/skins" text="See All Skins" hasArrow />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
            {DummySkins.map((skin) => (
              <SkinDisplay key={skin.skinName} skin={skin} />
            ))}
          </div>
        </section>
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">Featured Players</h2>
            <SecondaryButtonLink
              text="See All Players"
              href="/players"
              hasArrow
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
            {DummyPlayers.map((player) => (
              <Link href={player.playerUri}>
                <PlayerDisplay key={player.playerName} player={player} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
