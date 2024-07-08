'use client'
import PlayerDisplay from '@/components/PlayerDisplay'
import { PlayerProfile } from '@/types/viewmodels/types'
import Loadout from '@/components/Loadout'
import TeammateDisplay from '@/components/TeammateDisplay'
import { useState, useEffect } from 'react'
import { getPlayer, getTeammates } from '@/utils/data/Players'

/*
    NEEDS: Single Player Data / Other Teammates
    ROUTE: /api/Player/GetPlayer?playerName=sh1ro

    Potentially get top skins and place them as image for each weapon?
*/

export default function Page({ params }: { params: { player: string } }) {
  const [player, setPlayer] = useState<PlayerProfile | null>(null)
  const [teammates, setTeammates] = useState<PlayerProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getPlayer(params.player)
      const teammateData = await getTeammates(params.player)
      setPlayer(apiData)
      setTeammates(teammateData)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <main className="flex gap-16 my-16">
      {player && (
        <div className="flex flex-col lg:flex-row gap-8 mx-auto">
          <div>
            <PlayerDisplay player={player} />
            <div className="space-y-4 mt-10 hidden lg:block">
              <h2 className="text-xl font-medium">Teammates</h2>
              {teammates &&
                teammates.map((p) => (
                  <TeammateDisplay key={p.playerName} player={p} />
                ))}
            </div>
          </div>

          <Loadout player={player} />
        </div>
      )}
    </main>
  )
}
