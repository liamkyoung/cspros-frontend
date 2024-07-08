'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { PlayerProfile } from '@/types/viewmodels/types'
import { getTrendingPlayers } from '@/utils/data/Players'
import Link from 'next/link'
import PlayerDisplay from './PlayerDisplay'

type Props = {}

export default function TrendingPlayers({}: Props) {
  const [trendingPlayers, setTrendingPlayers] = useState<
    PlayerProfile[] | null
  >(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getTrendingPlayers()
      setTrendingPlayers(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading Players...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 justify-between">
      {trendingPlayers &&
        trendingPlayers.map((player) => (
          <Link
            className="hover:scale-110"
            href={player.uri}
            key={player.playerName}
          >
            <PlayerDisplay player={player} />
          </Link>
        ))}
    </div>
  )
}
