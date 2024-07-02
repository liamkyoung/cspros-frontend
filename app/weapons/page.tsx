'use client'

import React, { useState } from 'react'
import { LoadoutLinkType, TeamAssigned } from '@/types'
import { Weapons } from '@/data/weaponData'
import WeaponDisplay from '@/components/WeaponDisplay'
import Loadout from '@/components/Loadout'

type Props = {}

export default function Page({}: Props) {
  return (
    <main className="mx-auto max-w-6xl mt-16">
      <Loadout />
    </main>
  )
}
