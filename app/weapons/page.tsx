import React from 'react'
import Loadout from '@/components/Loadout'
import type { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: 'CS-Pros | Weapons',
  description:
    'Select a weapon and see the most popular skins for the weapon, analyzed by 500+ CS2 Pro matches.',
}

export default function Page({}: Props) {
  return (
    <main className="mx-auto max-w-6xl my-16 p-16 lg:p-0">
      <Loadout />
    </main>
  )
}
