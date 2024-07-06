import React from 'react'
import { WeaponProfile } from '../types/viewmodels/types'
import { DummySkins } from '../data/skinData'
import SkinDisplay from './SkinDisplay'
import Link from 'next/link'
import SecondaryButtonLink from './Buttons/SecondaryButtonLink'

import { getPopularSkinsForWeapon } from '@/utils/data/Skins'
import PopularSkins from './PopularSkins'

type SkinRowProps = {
  title?: string
  hideViewAllButton?: boolean
  hideWeaponTitle?: boolean
  weapons: WeaponProfile[]
}

export default function SkinProfileGroup({
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
                <SecondaryButtonLink
                  text={`View ${weapon.weaponName} Skins`}
                  href={`/skins/${weapon.normalizedName}`}
                  hasArrow
                />
              )}
            </div>

            <PopularSkins
              key={weapon.weaponName}
              weaponName={weapon.normalizedName}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
