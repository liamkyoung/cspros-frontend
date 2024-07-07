import { SkinProfile, SkinRarity } from '@/types/viewmodels/types'
import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import { GetSkinRarityName } from '@/utils/SkinRarityUtilities'

import React from 'react'

type Props = {
  skin: SkinProfile
}

function getBackgroundGradient(Rarity: SkinRarity): string {
  switch (Rarity) {
    case SkinRarity.CONSUMER: // white
      return 'from-[#909CB0] to-white'
    case SkinRarity.INDUSTRIAL: // light blue
      return 'from-[#5677B0] to-white'
    case SkinRarity.MILSPEC: // blue
      return 'from-[#4450CF] to-[#A2A7DB]'
    case SkinRarity.RESTRICTED: // purple
      return 'from-[#663BCF] to-[#9F7FEC]'
    case SkinRarity.CLASSIFIED: // pink
      return 'from-[#9C35B9] to-[#EBA4FF]'
    case SkinRarity.COVERT || SkinRarity.EXTRAORDINARY: // red
      return 'from-[#D35147] to-[#FF9C9C]'
    case SkinRarity.CONTRABAND: // orange
      return 'from-[#C7903E] to-[#FFE2B6]'
    default:
      return ''
  }

  return ''
}

export default function SkinContainer({ skin }: Props) {
  return (
    <div
      className={`rounded-md flex flex-col items-center p-8 bg-gradient-to-b ${getBackgroundGradient(
        skin.skinRarity
      )}`}
    >
      <div className="inline-flex items-end gap-x-2">
        <h1 className="text-4xl font-bold text-gray-900">
          {skin.weaponName} | {skin.skinName}
        </h1>
        <h4 className={`text-xl text-gray`}>
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
          href={skin.uri}
        />
      </div>
    </div>
  )
}
