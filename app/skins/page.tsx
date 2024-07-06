import { Weapons } from '@/data/weaponData'
import SkinProfileGroup from '@/components/SkinProfileGroup'

/*
    NEEDS: MOST POPULAR 4 SKINS FOR ALL WEAPONS. SORTED BY WEAPON TYPE
    ROUTE: /api/Skin/GetPopularSkinsForAllWeapons
*/

export default function Page({ params }: { params: {} }) {
  return (
    <main className="mx-auto max-w-6xl space-y-16 mt-16">
      <h1 className="text-4xl font-bold">Skins</h1>

      <SkinProfileGroup title="Rifles" weapons={Weapons['Rifle']} />
      <SkinProfileGroup title="Pistols" weapons={Weapons['Pistols']} />
      <SkinProfileGroup title="SMGs" weapons={Weapons['SMG']} />
      <SkinProfileGroup title="Heavy" weapons={Weapons['Heavy']} />
    </main>
  )
}
