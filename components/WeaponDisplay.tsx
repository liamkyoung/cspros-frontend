import React from 'react'
import { PlayerProfile, WeaponProfile } from '@/types/viewmodels/types'
import Link from 'next/link'

type Props = {
  weapon: WeaponProfile
  player?: PlayerProfile
}

export default function WeaponDisplay({ weapon, player }: Props) {
  function getLoadoutLink() {
    if (!player) return `/skins/${weapon.normalizedName}`

    return `/players/${player.playerName}/${weapon.normalizedName}`
  }

  return (
    <Link href={getLoadoutLink()} className="block">
      <div className="flex items-center justify-between gap-4 ring-1 ring-gray-200 bg-slate-700 rounded-md px-4 py-2 hover:opacity-90">
        <img src={weapon.imgSrc} className="w-24 h-16 rounded-sm" />
        <h1 className="font-medium text-2xl lg:text-lg text-white">
          {weapon.weaponName}
        </h1>
      </div>
    </Link>
  )
}
