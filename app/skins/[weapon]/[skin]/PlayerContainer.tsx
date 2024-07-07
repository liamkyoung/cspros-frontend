import React from 'react'
import { SkinProfile, SkinUsage } from '@/types/viewmodels/types'
import TopPlayer from '@/components/TopPlayer'

type Props = {
  skin: SkinProfile
  players: SkinUsage[]
}

export default function PlayerContainer({ skin, players }: Props) {
  return (
    <div className="">
      <h2 className="font-medium text-2xl text-right">
        Top Players Using {skin.weaponName} | {skin.skinName}
      </h2>
      <div className="space-y-4 flex flex-col items-end mt-4">
        {/* <TeammateDisplay player={iM} /> */}
        {players &&
          players.map((skinUsage) => (
            <TopPlayer
              key={skinUsage.player.playerName}
              skinUsage={skinUsage}
            />
          ))}

        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          See More
        </button>
      </div>
    </div>
  )
}
