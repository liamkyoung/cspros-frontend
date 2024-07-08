import React from 'react'
import { SkinProfile, SkinRarity } from '@/types/viewmodels/types'

type Props = {
  skin: SkinProfile
  large?: boolean
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

export default function FavoriteWeapon({ skin, large = false }: Props) {
  return (
    <div
      className={`rounded-md col-span-2 ${
        large ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
    >
      <div
        className={`relative mx-auto max-w-[56rem] ${
          large ? 'lg:max-w-[56rem]' : 'lg:max-w-[25rem]'
        }`}
      >
        <div
          className={`rounded-md bg-gradient-to-b ${getBackgroundGradient(
            skin.skinRarity
          )}`}
        >
          <img src={skin.imageSrc} className="mx-auto size-80 aspect-square" />
        </div>
        <div className="-translate-y-20 scale-105 rounded-md bg-white p-6 text-left">
          <p className="text-2xl font-bold text-gray-900">{skin.skinName}</p>
          <p className="font-medium text-gray-600 text-lg">{skin.weaponName}</p>
        </div>
        <div className="flex items-center gap-2 absolute -top-2 -right-2">
          {skin.gamesUsed && (
            <span className="inline-flex gap-2 text-xl font-semibold items-center bg-yellow-400 ring-white ring-1 rounded-md w-fit px-4 py-2 text-yellow-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className="size-6"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
              </svg>
              {skin.gamesUsed}
            </span>
          )}

          {skin.numberOfKills && (
            <span className="inline-flex gap-2 text-xl font-semibold items-center bg-red-400 ring-white ring-1 rounded-md w-fit px-4 py-2 text-red-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="size-6 text-red-100"
              >
                <path d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              {skin.numberOfKills}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
