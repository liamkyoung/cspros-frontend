'use client'

import React, { useState } from 'react'
import {
  PlayerProfile,
  TeamAssigned,
  WeaponProfile,
} from '@/types/viewmodels/types'
import { MidTier, Weapons } from '@/data/weaponData'
import WeaponDisplay from '@/components/WeaponDisplay'

type Props = {
  player?: PlayerProfile
}

type WeaponTypeColumnProps = {
  title: string
  weapons: WeaponProfile[]
  filter: TeamAssigned
  player?: PlayerProfile
}

function WeaponTypeColumn({
  title,
  weapons,
  filter,
  player,
}: WeaponTypeColumnProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-2xl">{title}</h2>
      {weapons
        .filter(
          (w) =>
            filter == TeamAssigned.BOTH ||
            w.teamAssigned === TeamAssigned.BOTH ||
            w.teamAssigned === filter
        )
        .map((weapon) => (
          <WeaponDisplay
            key={weapon.weaponName}
            weapon={weapon}
            player={player}
          />
        ))}
    </div>
  )
}

export default function Loadout({ player }: Props) {
  const [teamFilter, setFilter] = useState(TeamAssigned.BOTH)

  const selectedStyle = (filter: TeamAssigned) => {
    if (teamFilter === filter) return 'bg-gray-100 text-gray-700'

    return 'text-gray-500 hover:text-gray-700'
  }

  // const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilter(event.target.value)
  // }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Loadout</h1>

        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 text-black"
              // onChange={e => setFilter(e.target.value)}
            >
              <option
                selected={teamFilter === TeamAssigned.BOTH}
                onChange={() => setFilter(TeamAssigned.BOTH)}
                value={0}
              >
                All
              </option>
              <option selected={teamFilter === TeamAssigned.CT} value={2}>
                Counter-Terrorist
              </option>
              <option selected={teamFilter === TeamAssigned.T} value={1}>
                Terrorist
              </option>
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              <span
                className={`${selectedStyle(
                  TeamAssigned.BOTH
                )} rounded-md px-3 py-2 text-sm font-medium cursor-pointer`}
                onClick={() => setFilter(TeamAssigned.BOTH)}
              >
                All
              </span>
              <span
                className={`${selectedStyle(
                  TeamAssigned.CT
                )} rounded-md px-3 py-2 text-sm font-medium cursor-pointer`}
                onClick={() => setFilter(TeamAssigned.CT)}
              >
                Counter-Terrorists
              </span>
              <span
                className={`${selectedStyle(
                  TeamAssigned.T
                )} rounded-md px-3 py-2 text-sm font-medium cursor-pointer`}
                onClick={() => setFilter(TeamAssigned.T)}
              >
                Terrorists
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <WeaponTypeColumn
          title="Pistols"
          weapons={Weapons.Pistols}
          filter={teamFilter}
          player={player}
        />

        <WeaponTypeColumn
          title="Mid-Tier"
          weapons={MidTier}
          filter={teamFilter}
          player={player}
        />

        <WeaponTypeColumn
          title="Rifles"
          weapons={Weapons.Rifle}
          filter={teamFilter}
          player={player}
        />
      </div>
    </div>
  )
}
