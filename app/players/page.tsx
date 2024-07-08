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
    <main className="max-w-6xl mx-auto mt-16">
      <h1 className="text-4xl font-bold lg:text-left text-center">Players</h1>

      <div className="space-y-16 flex flex-col mt-12">
        {teams &&
          teams.map((team) => (
            <div className="mx-10 lg:mx-0">
              <h1 className="text-3xl font-medium">{team.teamName}</h1>
              <div className="flex flex-col lg:flex-row gap-8 mt-6 lg:mt-12 lg:justify-between">
                {team.players.map((player) => (
                  <Link href={player.uri} className="hover:scale-110">
                    <PlayerDisplay player={player} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}
