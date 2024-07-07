import React from 'react'
import { SkinProfile } from '@/types/viewmodels/types'

type Props = {
  skin: SkinProfile
  large?: boolean
}

export default function FavoriteWeapon({ skin, large = false }: Props) {
  return (
    <div
      className={`bg-red-400 p-8 rounded-md ${
        large ? 'col-span-2' : 'col-span-1'
      }`}
    >
      <h3 className="font-bold text-2xl">
        {skin.weaponName} | {skin.skinName}
      </h3>
      <div className="flex">
        <img src={skin.imageSrc} />
        <div className="font-medium text-lg">
          <p>Kills: {skin.numberOfKills}</p>
          {skin.gamesUsed && <p>Games Used: {skin.gamesUsed}</p>}
        </div>
      </div>
    </div>
  )
}
