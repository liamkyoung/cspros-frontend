import React from 'react'
import { s1mple } from '@/data/playerData'
import { PlayerProfile, SkinProfile } from '@/types/viewmodels/types'
import TeammateDisplay from '@/components/TeammateDisplay'

type Props = {
  skin: SkinProfile
}

export default function PlayerContainer({ skin }: Props) {
  return (
    <div className="">
      <h2 className="font-medium text-2xl text-right">
        Top Players Using {skin.weaponName} | {skin.skinName}
      </h2>
      <div className="space-y-4 flex flex-col items-end mt-4">
        {/* <TeammateDisplay player={iM} /> */}
        <TeammateDisplay player={s1mple} />
        <TeammateDisplay player={s1mple} />
        <TeammateDisplay player={s1mple} />
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
