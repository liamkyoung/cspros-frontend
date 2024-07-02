import PlayerDisplay from '@/components/PlayerDisplay'
import TeammateDisplay from '@/components/TeammateDisplay'
import { s1mple, m0nesy, NiKo, dev1ce } from '@/data/playerData'
import { AK_REDLINE, AWP_ASIIMOV, M4_HOWL } from '@/data/skinData'
import FavoriteWeapon from './FavoriteWeapon'
import Breadcrumbs from './Breadcrumbs'
import Link from 'next/link'

/*
    NEEDS: MOST USED 3 SKINS FOR SPECIFIC PLAYER AND SPECIFIC WEAPON
    ROUTE: 
*/

export default function Page({
  params,
}: {
  params: { player: string; weapon: string }
}) {
  return (
    <main className="grid grid-cols-3 gap-4 p-16">
      <div className="col-span-1">
        <PlayerDisplay player={s1mple} />
        <div className="flex gap-16 mx-auto mt-24">
          <div className="space-y-4">
            <h2>Teammates</h2>
            <TeammateDisplay player={m0nesy} />
            <TeammateDisplay player={NiKo} />
            <TeammateDisplay player={dev1ce} />
          </div>
        </div>
      </div>

      {/* Weapon List */}
      <div className="col-span-2">
        <Breadcrumbs playerName={params.player} weaponName={params.weapon} />
        <div className="grid grid-cols-2 gap-4">
          <FavoriteWeapon weapon={AK_REDLINE} large />
          <FavoriteWeapon weapon={M4_HOWL} />
          <FavoriteWeapon weapon={AWP_ASIIMOV} />
        </div>
      </div>
    </main>
  )
}
