import PlayerDisplay from '@/components/PlayerDisplay'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { s1mple } from '@/data/playerData'
import Loadout from '@/components/Loadout'
import { LoadoutLinkType } from '@/types'

export default function Page({ params }: { params: { player: string } }) {
  return (
    <div className="flex gap-16 mx-auto mt-24">
      <PlayerDisplay player={s1mple} />
      <Loadout player={s1mple} />
    </div>
  )
}
