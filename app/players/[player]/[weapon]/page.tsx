import PlayerDisplay from '@/components/PlayerDisplay'
import TeammateDisplay from '@/components/TeammateDisplay'
import { s1mple, m0nesy, NiKo, dev1ce } from '@/data/playerData'
import { AK_REDLINE, AWP_ASIIMOV, M4_HOWL } from '@/data/skinData'
import Link from 'next/link'

export default function Page({
  params,
}: {
  params: { player: string; weapon: string }
}) {
  return (
    <div className="grid grid-cols-3 gap-4 p-16">
      <div className="col-span-1">
        <PlayerDisplay player={s1mple} />
        <div className="space-y-4 mt-10">
          <h2>Teammates</h2>
          <TeammateDisplay player={m0nesy} />
          <TeammateDisplay player={NiKo} />
          <TeammateDisplay player={dev1ce} />
        </div>
      </div>

      {/* Weapon List */}
      <div className="col-span-2">
        <span>
          <Link className="underline text-sky-500" href={`/players`}>
            players
          </Link>
          &gt;
          <Link
            className="underline text-sky-500"
            href={`/players/${params.player}/`}
          >
            {params.player}
          </Link>{' '}
          &gt; {params.weapon}
        </span>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-400 p-8 col-span-2 rounded-md">
            <h3 className="font-bold text-2xl">
              {AK_REDLINE.weaponName} | {AK_REDLINE.skinName}
            </h3>
            <div className="flex">
              <img src={AK_REDLINE.imgSrc} />
              <div className="font-medium text-lg">
                <p>Games: 120</p>
                <p>Kills: 999,999</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400 p-8 col-span-1 rounded-md">
            <h3 className="font-bold text-2xl">
              {M4_HOWL.weaponName} | {M4_HOWL.skinName}
            </h3>
            <div className="flex">
              <img src={M4_HOWL.imgSrc} />
              <div className="font-medium text-lg">
                <p>Games: 120</p>
                <p>Kills: 999,999</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-400 p-8 col-span-1 rounded-md">
            <h3 className="font-bold text-2xl">
              {AWP_ASIIMOV.weaponName} | {AWP_ASIIMOV.skinName}
            </h3>
            <div className="flex">
              <img src={AWP_ASIIMOV.imgSrc} />
              <div className="font-medium text-lg">
                <p>Games: 120</p>
                <p>Kills: 999,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
