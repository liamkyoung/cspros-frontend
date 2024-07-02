import Image from 'next/image'
import Link from 'next/link'
import { AllTeams } from '@/data/teamData'
import PlayerDisplay from '@/components/PlayerDisplay'
import { PlayerDisplayData } from '@/types'

/*
    NEEDS: Team / Player Data across 5 teams at a time, paginated?
    ROUTE: 
*/

export default function Home() {
  return (
    <main className="max-w-6xl mt-16">
      <h1 className="text-4xl font-bold">All Players</h1>

      <div className="space-y-16">
        {AllTeams.map((team) => (
          <div>
            <h1 className="text-2xl font-medium">Team</h1>
            <div className="flex gap-8 mt-8">
              {team.map((player) => (
                <Link href={player.playerUri}>
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
