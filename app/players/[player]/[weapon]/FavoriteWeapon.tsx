import React from 'react'
import { SkinProfile } from '@/types/viewmodels/types'

type Props = {
  weapon: SkinProfile
  large?: boolean
}

export default function FavoriteWeapon({ weapon, large = false }: Props) {
  return (
    <div
      className={`bg-red-400 p-8 rounded-md ${
        large ? 'col-span-2' : 'col-span-1'
      }`}
    >
      <h3 className="font-bold text-2xl">
        {weapon.weaponName} | {weapon.skinName}
      </h3>
      <div className="flex">
        <img src={weapon.imageSrc} />
        <div className="font-medium text-lg">
          <p>Games: 120</p>
          <p>Kills: 999,999</p>
        </div>
      </div>
    </div>
  )
}
