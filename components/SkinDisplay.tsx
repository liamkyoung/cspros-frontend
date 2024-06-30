import React from 'react'
import { SkinRarity, WeaponSkinData } from '../types'

type Props = {
  skin: WeaponSkinData
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
    <div className="relative size-64 hover:scale-110">
      <span className="absolute -right-4 -top-4 flex items-center gap-1 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white">
        160%
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      </span>
      <div
        className={`rounded-md bg-gradient-to-b ${getBackgroundGradient(
          skin.skinRarity
        )}`}
      >
        <img src={skin.imgSrc} className="scale-[120%]" />
      </div>
      <div className="-translate-y-20 scale-105 rounded-md bg-white/95 p-4 text-right">
        <p className="text-lg font-bold text-gray-900">{skin.skinName}</p>
        <p className="font-medium text-gray-600 text-sm">{skin.weaponName}</p>
      </div>
    </div>
  )
}
