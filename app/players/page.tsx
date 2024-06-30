import Image from 'next/image'
import Link from 'next/link'
import { AllTeams } from '@/data/teamData'
import PlayerDisplay from '@/components/PlayerDisplay'
import { PlayerDisplayData } from '@/types'

export default function Home() {
  return (
    <main className="">
      <h1>All Players</h1>

      {AllTeams.map((team) => (
        <div>
          <h1>TEAM</h1>
          <div className="flex gap-8">
            {team.map((player) => (
              <Link href={player.playerUri}>
                <PlayerDisplay player={player}></PlayerDisplay>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
