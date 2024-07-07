import React from 'react'
import Link from 'next/link'
import { SkinUsage } from '@/types/viewmodels/types'

type Props = {
  skinUsage: SkinUsage
}

export default function TopPlayer({ skinUsage }: Props) {
  return (
    <Link
      href={skinUsage.player.uri}
      className="block text-gray-900 bg-white rounded-md"
    >
      <div className="grid grid-cols-6 items-center gap-4 px-6">
        <img
          src={skinUsage.player.profileImage}
          className="size-24 col-span-3"
        />
        <span className="font-semibold text-lg col-span-2">
          {skinUsage.player.playerName}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-gray-900 size-6 col-span-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2">
        <p>Games Used: {skinUsage.gamesUsed}</p>
        <p>Kills: {skinUsage.totalKills}</p>
      </div>
    </Link>
  )
}
