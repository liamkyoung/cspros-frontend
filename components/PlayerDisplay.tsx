import React from 'react'
import { PlayerDisplayData } from '@/types'
import { FlagEmoji } from './FlagEmoji'

type Props = {
  player: PlayerDisplayData
}

export default function PlayerDisplay({ player }: Props) {
  return (
    <div className="relative size-64 hover:scale-110">
      <span className="absolute -right-4 -top-4 flex items-center gap-1 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-md">
        <img
          src="https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c"
          alt={player.teamName}
          className="size-12"
        />
      </span>
      <div className="rounded-md bg-gradient-to-b from-gray-500 to-[#ffffff00]">
        <img src={player.imgSrc} className="-translate-y-12" />
      </div>
      <div className="-translate-y-16 text-lg scale-105 rounded-md bg-white p-4 text-center shadow-md flex items-center justify-center gap-2">
        <FlagEmoji countryCode={'us'} />
        <p className="font-bold text-gray-900">{player.playerName}</p>
      </div>
    </div>
  )
}
