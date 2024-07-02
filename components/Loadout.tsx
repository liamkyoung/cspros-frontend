'use client'

import React, { useState } from 'react'
import {
  LoadoutLinkType,
  PlayerDisplayData,
  TeamAssigned,
  WeaponDisplayData,
} from '@/types'
import { Weapons } from '@/data/weaponData'
import WeaponDisplay from '@/components/WeaponDisplay'

type Props = {
  player?: PlayerDisplayData
}

type WeaponTypeColumnProps = {
  title: string
  weapons: WeaponDisplayData[]
  filter: TeamAssigned
  player?: PlayerDisplayData
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
    if (teamFilter === filter) return 'bg-red-100 text-red-700'

    return 'text-gray-500 hover:text-gray-700'
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Weapons</h1>

        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500"
            >
              <option selected={teamFilter === TeamAssigned.BOTH}>All</option>
              <option selected={teamFilter === TeamAssigned.CT}>
                Counter-Terrorist
              </option>
              <option selected={teamFilter === TeamAssigned.T}>
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

      <div className="grid grid-cols-4 gap-8 mt-16">
        <WeaponTypeColumn
          title="Pistols"
          weapons={Weapons.Pistols}
          filter={teamFilter}
          player={player}
        />

        <WeaponTypeColumn
          title="SMGs"
          weapons={Weapons.SMG}
          filter={teamFilter}
          player={player}
        />

        <WeaponTypeColumn
          title="Heavy"
          weapons={Weapons.Heavy}
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
