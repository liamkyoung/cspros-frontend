import React from 'react'
import Loadout from '@/components/Loadout'

type Props = {}

export default function Page({}: Props) {
  return (
    <main className="mx-auto max-w-6xl my-16 p-16 lg:p-0">
      <Loadout />
    </main>
  )
}
