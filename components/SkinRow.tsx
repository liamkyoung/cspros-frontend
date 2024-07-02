import React from 'react'
import { WeaponDisplayData } from '../types'
import { DummySkins } from '../data/skinData'
import SkinDisplay from './SkinDisplay'
import Link from 'next/link'

type SkinRowProps = {
  title?: string
  hideViewAllButton?: boolean
  hideWeaponTitle?: boolean
  weapons: WeaponDisplayData[]
}

export default function SkinRow({
  title,
  weapons,
  hideViewAllButton = false,
  hideWeaponTitle = false,
}: SkinRowProps) {
  return (
    <div>
      {title && (
        <>
          <h2 className="font-semibold text-3xl">{title}</h2>
          <hr className="mt-2 mb-6" />
        </>
      )}

      <div className="space-y-12">
        {weapons.map((weapon) => (
          <div>
            <div className="flex items-center justify-between mb-10">
              {!hideWeaponTitle && (
                <h3 className="text-2xl font-medium">{weapon.weaponName}</h3>
              )}
              {!hideViewAllButton && (
                <Link
                  type="button"
                  href={`/skins/${weapon.normalizedName}`}
                  className="inline-flex gap-2 items-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  View {weapon.weaponName} Skins
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              )}
            </div>

            <div className="flex justify-between align-center">
              {DummySkins.map((skin) => (
                <SkinDisplay skin={skin} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
