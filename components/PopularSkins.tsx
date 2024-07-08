'use client'
import React, { useState, useEffect } from 'react'
import { getPopularSkinsForWeapon } from '@/utils/data/Skins'
import { SkinProfile } from '@/types/viewmodels/types'
import SkinDisplay from './SkinDisplay'

type Props = {
  weaponName: string
  formattedName: string
}

export default function PopularSkins({ weaponName, formattedName }: Props) {
  const [skins, setSkins] = useState<SkinProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getPopularSkinsForWeapon(weaponName.toLowerCase())
      setSkins(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) return <div>Loading {weaponName} skins...</div>

  if (skins && skins.length == 0)
    return (
      <div className="text-center bg-gray-600 rounded-md p-8 text-gray-200 ring ring-gray-200">
        No in-game uses of {formattedName} found...
      </div>
    )

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
      {skins &&
        skins.map((skin) => <SkinDisplay key={skin.skinName} skin={skin} />)}
    </div>
  )
}
