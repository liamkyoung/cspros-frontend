'use client'
import Link from 'next/link'
import PlayerDisplay from '@/components/PlayerDisplay'
import { TeamProfile } from '@/types/viewmodels/types'
import { useState, useEffect } from 'react'
import { getAllTeams } from '@/utils/data/Teams'
/*
    NEEDS: Team / Player Data across 5 teams at a time, paginated?
    ROUTE: 
*/

export default function Page() {
  const [teams, setTeams] = useState<TeamProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const teamData = await getAllTeams()
      setTeams(teamData)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <main className="max-w-6xl mt-16">
      <h1 className="text-4xl font-bold">All Players</h1>

      <div className="space-y-16">
        {teams &&
          teams.map((team) => (
            <div>
              <h1 className="text-2xl font-medium">{team.teamName}</h1>
              <div className="flex gap-8 mt-8">
                {team.players.map((player) => (
                  <Link href={player.uri}>
                    <PlayerDisplay player={player}></PlayerDisplay>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}
