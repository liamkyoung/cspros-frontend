import React from 'react'
import { SkinRarity, SkinProfile } from '@/types/viewmodels/types'
import Link from 'next/link'

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

export default function SkinDisplay({ skin }: Props) {
  return (
    <Link href={skin.uri} className="block">
      <div className="relative size-56 md:size-64 hover:scale-110">
        <div
          className={`rounded-md bg-gradient-to-b ${getBackgroundGradient(
            skin.skinRarity
          )}`}
        >
          <img
            src={skin.imageSrc}
            className="scale-[120%] size-48 md:size-64  lg:size-56"
          />
        </div>
        <div className="-translate-y-20 scale-105 rounded-md bg-white p-4 text-right">
          <p className="text-lg font-bold text-gray-900">{skin.skinName}</p>
          <p className="font-medium text-gray-600 text-sm">{skin.weaponName}</p>
        </div>
      </div>
    </Link>
  )
}
