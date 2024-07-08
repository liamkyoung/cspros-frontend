import React from 'react'
import Link from 'next/link'
import { SkinUsage } from '@/types/viewmodels/types'

type Props = {
  skinUsage: SkinUsage
}

export default function TopPlayer({ skinUsage }: Props) {
  return (
    <Link href={skinUsage.player.uri} className="block relative">
      <div className="grid grid-cols-6 items-center gap-4 max-w-96 text-gray-900 bg-gray-50 ring-1 ring-gray-500 px-4 pt-1 rounded-md">
        <img src={skinUsage.player.profileImage} className="col-span-2" />
        <span className="font-medium text-2xl col-span-2">
          {skinUsage.player.playerName}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-gray-900 size-8 col-span-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
      <div className="flex items-center gap-2 absolute -top-2 -right-2">
        <span className="inline-flex gap-2 text-xl font-semibold items-center bg-yellow-400 ring-white ring-1 rounded-md w-fit px-2 py-1 text-yellow-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
            className="size-6"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
          </svg>
          {skinUsage.gamesUsed}
        </span>
        <span className="inline-flex gap-2 text-xl font-semibold items-center bg-red-400 ring-white ring-1 rounded-md w-fit px-2 py-1 text-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="size-6 text-red-100"
          >
            <path d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          {skinUsage.totalKills}
        </span>
      </div>
    </Link>
  )
}
