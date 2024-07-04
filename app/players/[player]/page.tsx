import PlayerDisplay from '@/components/PlayerDisplay'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { s1mple, m0nesy, NiKo, dev1ce } from '@/data/playerData'
import Loadout from '@/components/Loadout'
import { LoadoutLinkType } from '@/types'
import TeammateDisplay from '@/components/TeammateDisplay'

/*
    NEEDS: Single Player Data / Other Teammates
    ROUTE: /api/Player/GetPlayer?playerName=sh1ro

    Potentially get top skins and place them as image for each weapon?
*/

export default function Page({ params }: { params: { player: string } }) {
  return (
    <main className="flex gap-16 mt-24">
      <div>
        <PlayerDisplay player={s1mple} />
        <div className="space-y-4 mt-10">
          <h2>Teammates</h2>
          <TeammateDisplay player={m0nesy} />
          <TeammateDisplay player={NiKo} />
          <TeammateDisplay player={dev1ce} />
        </div>
      </div>

      <Loadout player={s1mple} />
    </main>
  )
}
