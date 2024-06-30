import SkinDisplay from '@/components/SkinDisplay'
import Image from 'next/image'
import Link from 'next/link'
import { WeaponSkinData } from '@/types'
import { DummySkins } from '@/data/skinData'
import { DummyPlayers } from '@/data/playerData'
import PlayerDisplay from '@/components/PlayerDisplay'

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-24">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
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
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Players
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Popular Skins
            </button>
          </div>
        </div>
        <div className="">
          <Image
            alt="hero image"
            className=""
            src="/hero_image.png"
            objectFit="contain"
            width={2000}
            height={2000}
            quality={100}
            priority
          />
        </div>
      </div>

      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-3xl">Trending Skins</h2>
          <button
            type="button"
            className=" inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            See All Skins
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
          {DummySkins.map((skin) => (
            <Link href={skin.skinUri}>
              <SkinDisplay key={skin.skinName} skin={skin} />
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-3xl">Featured Players</h2>
          <button
            type="button"
            className=" inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            See All Players
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
          {DummyPlayers.map((player) => (
            <Link href={player.playerUri}>
              <PlayerDisplay key={player.playerName} player={player} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
