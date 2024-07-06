import { SkinProfile } from '@/types/viewmodels/types'
import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import {
  GetSkinRarityName,
  GetSkinRarityTextColor,
} from '@/utils/SkinRarityUtilities'
import React from 'react'

type Props = {
  skin: SkinProfile
}

export default function SkinContainer({ skin }: Props) {
  return (
    <div className="bg-white/90 rounded-md flex flex-col items-center p-8">
      <div className="inline-flex items-end gap-x-2">
        <h1 className="text-4xl font-bold text-gray-900">
          {skin.weaponName} | {skin.skinName}
        </h1>
        <h4 className={`text-xl text-covert`}>
          {GetSkinRarityName(skin.skinRarity)}
        </h4>
      </div>
      <img src={skin.imageSrc} />
      <div className="flex items-center gap-8">
        <PrimaryButtonLink
          text="CSGO Stash"
          href={`https://csgostash.com/weapon/Desert+Eagle`}
          hasArrow
        />
        <SecondaryButtonLink
          text={`See All ${skin.weaponName}s`}
          href={`/skins/${skin.weaponName}`}
        />
      </div>
    </div>
  )
}
