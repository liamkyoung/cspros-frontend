import type { Metadata } from 'next'
import TeamDisplay from './TeamDisplay'

export const metadata: Metadata = {
  title: 'CSPros | Players',
  description:
    'See all players in the CsPros database and find their favorite skins.',
}

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto mt-16">
      <h1 className="text-4xl font-bold lg:text-left text-center">Players</h1>
      <div className="space-y-16 flex flex-col mt-12">
        <TeamDisplay />
      </div>
    </main>
  )
}
