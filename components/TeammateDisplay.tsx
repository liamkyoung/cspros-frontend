import { PlayerProfile } from '@/types/viewmodels/types'
import Link from 'next/link'
import React from 'react'

type Props = {
  player: PlayerProfile
}

export default function TeammateDisplay({ player }: Props) {
  return (
    <Link href={player.uri} className="block">
      <div className="grid grid-cols-6 items-center gap-4 bg-white w-72 px-6 rounded-md">
        <img src={player.profileImage} className="size-24 col-span-3" />
        <span className="font-semibold text-lg text-gray-900 col-span-2">
          {player.playerName}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-gray-900 size-6 col-span-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </Link>
  )
}
