'use client'
import { SkinProfile } from '@/types/viewmodels/types'
import { getTrendingSkins } from '@/utils/data/Skins'
import React, { useState, useEffect } from 'react'
import SecondaryButtonLink from './Buttons/SecondaryButtonLink'
import SkinDisplay from './SkinDisplay'

type Props = {}

export default function TrendingSkins({}: Props) {
  const [skins, setSkins] = useState<SkinProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getTrendingSkins()
      setSkins(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) return <div>Loading skins...</div>

  return (
    <section className="space-y-10 px-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Trending Skins</h2>
        <SecondaryButtonLink href="/skins" text="See All Skins" hasArrow />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {skins &&
          skins.map((skin) => <SkinDisplay key={skin.skinName} skin={skin} />)}
      </div>
    </section>
  )
}
