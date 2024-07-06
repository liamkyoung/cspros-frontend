'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { getTrendingPlayers } from '@/utils/data/Players'
import { Player } from '@/types/models/Player'
import Link from 'next/link'
import PlayerDisplay from '@/components/PlayerDisplay'
import { PlayerProfile } from '@/types/viewmodels/types'

type Props = {}

export default function Page({}: Props) {
  const [data, setData] = useState<PlayerProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getTrendingPlayers()
      setData(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Error loading data</div>
  }

  return (
    <div className="flex items-center justify-between">
      {data.map((player) => (
        <Link href={player.uri}>
          <PlayerDisplay key={player.playerName} player={player} />
        </Link>
      ))}
    </div>
  )
}
