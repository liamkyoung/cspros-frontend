import React from 'react'
import { PlayerProfile } from '@/types/viewmodels/types'
import { FlagEmoji } from './FlagEmoji'

type Props = {
  player: PlayerProfile
}

export default function PlayerDisplay({ player }: Props) {
  return (
    <div className={`relative flex lg:block lg:max-w-64`}>
      <span className="absolute -right-4 -top-4 flex items-center gap-1 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-md z-10">
        <img
          src="https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
          alt={player.team?.name}
          className="size-6 lg:size-8 xl:size-12"
        />
      </span>
      <div className="rounded-md bg-gradient-to-b from-gray-500 to-[#ffffff00]">
        <img
          src={player.profileImage}
          className="lg:-translate-y-12 size-32 lg:size-48 mx-auto"
        />
      </div>
      <div className="lg:-translate-y-16 text-lg scale-105 rounded-md bg-white px-24 lg:p-4 text-center shadow-md flex items-center justify-center gap-2 flex-grow">
        {player.countryAbbreviation && (
          <FlagEmoji countryCode={player.countryAbbreviation} />
        )}
        <p className="font-bold text-gray-900 lg:text-base text-2xl">
          {player.playerName}
        </p>
      </div>
    </div>
  )
}
