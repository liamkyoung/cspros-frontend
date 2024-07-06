'use client'
import React, { useState, useEffect } from 'react'
import { getPopularSkinsForWeapon } from '@/utils/data/Skins'
import { SkinProfile } from '@/types/viewmodels/types'
import SkinDisplay from './SkinDisplay'

type Props = {
  weaponName: string
}

export default function PopularSkins({ weaponName }: Props) {
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

  return (
    <div className="flex justify-between align-center">
      {skins &&
        skins.map((skin) => <SkinDisplay key={skin.skinName} skin={skin} />)}
    </div>
  )
}
