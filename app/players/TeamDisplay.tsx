'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import PlayerDisplay from '@/components/PlayerDisplay'
import { TeamProfile } from '@/types/viewmodels/types'
import { getAllTeams } from '@/utils/data/Teams'

type Props = {}

export default function TeamDisplay({}: Props) {
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
    <>
      {teams &&
        teams.map((team) => (
          <div key={team.teamName} className="mx-10 lg:mx-0">
            <h1 className="text-3xl font-medium">{team.teamName}</h1>
            <div className="flex flex-col lg:flex-row gap-8 mt-6 lg:mt-12 lg:justify-between">
              {team.players.map((player) => (
                <Link
                  key={player.playerName}
                  href={player.uri}
                  className="hover:scale-110"
                >
                  <PlayerDisplay player={player} />
                </Link>
              ))}
            </div>
          </div>
        ))}
    </>
  )
}
