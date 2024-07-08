import { SkinProfile, SkinRarity } from '@/types/viewmodels/types'
import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import { GetSkinRarityName } from '@/utils/SkinRarityUtilities'
import Link from 'next/link'

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
    <div className="mx-10">
      <Link href={`/skins`}>
        <p className="inline-flex items-center gap-4 bg-slate-600 ring-1 ring-white rounded-md px-4 py-2 text-lg mb-12 text-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          See all skins
        </p>
      </Link>
      <div className="max-w-96 max-h-96 lg:max-w-none lg:max-h-none mx-auto">
        <div
          className={`rounded-md bg-gradient-to-b ${getBackgroundGradient(
            skin.skinRarity
          )}`}
        >
          <img
            src={skin.imageSrc}
            className="scale-[120%] mx-auto min-h-64 min-w-64"
          />
        </div>
        <div className="-translate-y-20 scale-105 rounded-md bg-white p-8 text-right">
          <p className="text-2xl font-bold text-gray-900">{skin.skinName}</p>
          <p className="font-medium text-gray-600 text-lg">{skin.weaponName}</p>
        </div>
      </div>
    </div>
  )
}
