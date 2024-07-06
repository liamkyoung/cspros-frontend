'use client'
import PlayerDisplay from '@/components/PlayerDisplay'
import { PlayerProfile } from '@/types/viewmodels/types'
import { s1mple } from '@/data/playerData'
import Loadout from '@/components/Loadout'
import TeammateDisplay from '@/components/TeammateDisplay'
import { useState, useEffect } from 'react'
import { getPlayer } from '@/utils/data/Players'

/*
    NEEDS: Single Player Data / Other Teammates
    ROUTE: /api/Player/GetPlayer?playerName=sh1ro

    Potentially get top skins and place them as image for each weapon?
*/

export default function Page({ params }: { params: { player: string } }) {
  const [player, setPlayer] = useState<PlayerProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getPlayer(params.player)
      setPlayer(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <main className="flex gap-16 mt-24">
      {player && (
        <>
          <div>
            <PlayerDisplay player={player} />
            <div className="space-y-4 mt-10">
              <h2>Teammates</h2>
              <TeammateDisplay player={player} />
              <TeammateDisplay player={player} />
              <TeammateDisplay player={player} />
            </div>
          </div>

          <Loadout player={player} />
        </>
      )}
    </main>
  )
}
