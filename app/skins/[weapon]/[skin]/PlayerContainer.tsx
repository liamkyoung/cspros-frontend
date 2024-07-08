import React from 'react'
import { SkinProfile, SkinUsage } from '@/types/viewmodels/types'
import TopPlayer from '@/components/TopPlayer'
import PlayerDisplay from '@/components/PlayerDisplay'

type Props = {
  skin: SkinProfile
  players: SkinUsage[]
}

export default function PlayerContainer({ skin, players }: Props) {
  return (
    <div className="mx-10 place-items-center">
      <h2 className="font-medium text-2xl lg:text-right text-center">
        Top Players Using {skin.weaponName} | {skin.skinName}
      </h2>
      <div className="space-y-4 flex flex-col lg:items-end items-center mt-4">
        {/* <TeammateDisplay player={iM} /> */}
        {players &&
          players.map((skinUsage) => (
            <TopPlayer
              key={skinUsage.player.playerName}
              skinUsage={skinUsage}
            />
          ))}
      </div>
    </div>
  )
}
