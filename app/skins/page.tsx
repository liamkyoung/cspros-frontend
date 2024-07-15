import { Weapons } from '@/data/weaponData'
import SkinProfileGroup from '@/components/SkinProfileGroup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CS-Pros | Skins',
  description:
    'See the most popular skins used by professional CS2 Players, organized by weapon.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 my-16">
      <h1 className="text-4xl font-bold text-center lg:text-left">Skins</h1>

      <SkinProfileGroup title="Rifles" weapons={Weapons['Rifle']} />
      <SkinProfileGroup title="Pistols" weapons={Weapons['Pistols']} />
      <SkinProfileGroup title="SMGs" weapons={Weapons['SMG']} />
      <SkinProfileGroup title="Heavy" weapons={Weapons['Heavy']} />
    </main>
  )
}
