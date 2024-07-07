'use client'

import SkinContainer from './SkinContainer'
import PlayerContainer from './PlayerContainer'
import { getPopularPlayersUsingSkin } from '@/utils/data/Skins'
import { useState, useEffect } from 'react'
import { PlayersUsingSkin } from '@/types/viewmodels/types'

/*
    NEEDS: TOP 5 Players using a particular skin and number of kills for each player
    ROUTE: /api/Skin/PlayersUsingSkin?skinName=Printstream&weaponDemoName=deagle
*/

export default function Page({
  params,
}: {
  params: { weapon: string; skin: string }
}) {
  const [playerUsingSkinDto, setPlayerUsingSkinDto] =
    useState<PlayersUsingSkin | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getPopularPlayersUsingSkin(
        params.skin,
        params.weapon
      )
      setPlayerUsingSkinDto(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 gap-8 mt-16">
        {playerUsingSkinDto && (
          <>
            {/* {Weapon Container} */}
            <SkinContainer skin={playerUsingSkinDto.skin} />

            {/* Player Container */}
            <PlayerContainer
              players={playerUsingSkinDto.players}
              skin={playerUsingSkinDto.skin}
            />
          </>
        )}
      </div>
    </main>
  )
}
