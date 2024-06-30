import React from 'react'
import { LoadoutLinkType, PlayerDisplayData, WeaponDisplayData } from '@/types'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type Props = {
  weapon: WeaponDisplayData
  player?: PlayerDisplayData
}

export default function WeaponDisplay({ weapon, player }: Props) {
  function getLoadoutLink() {
    if (!player) return `/skins/${weapon.normalizedName}`

    return `/players/${player.playerName}/${weapon.normalizedName}`
  }

  return (
    <Link href={getLoadoutLink()} className="block">
      <div className="flex items-center gap-4 border-gray-200 border-2 rounded-md px-4 py-2">
        <img src={weapon.imgSrc} className="w-24 h-16 rounded-sm bg-gray-200" />
        <h1 className="font-bold text-lg">{weapon.weaponName}</h1>
      </div>
    </Link>
  )
}
