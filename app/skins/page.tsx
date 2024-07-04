import { Weapons } from '@/data/weaponData'
import SkinRow from '@/components/SkinRow'

/*
    NEEDS: MOST POPULAR 4 SKINS FOR ALL WEAPONS.
           SORTED BY WEAPON TYPE
    ROUTE: 
*/

export default function Page({ params }: { params: {} }) {
  return (
    <main className="mx-auto max-w-6xl space-y-16 mt-16">
      <h1 className="text-4xl font-bold">Skins</h1>

      <SkinRow title="Rifles" weapons={Weapons['Rifle']} />
      <SkinRow title="Pistols" weapons={Weapons['Pistols']} />
      <SkinRow title="SMGs" weapons={Weapons['SMG']} />
      <SkinRow title="Heavy" weapons={Weapons['Heavy']} />
    </main>
  )
}
