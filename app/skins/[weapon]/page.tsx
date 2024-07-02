import SkinRow from '@/components/SkinRow'
import { DummySkins } from '@/data/skinData'
import { Weapons } from '@/data/weaponData'
import Link from 'next/link'

/*
    NEEDS: ALL SKINS FOR A PARTICULAR WEAPON, WEAPON FORMATTED NAME
    ROUTE: 
*/

export default function Page({ params }: { params: { weapon: string } }) {
  return (
    <main className="mx-auto max-w-6xl mt-16">
      <Link href="/skins" className="inline-flex gap-2 text-2xl items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        {params.weapon}
      </Link>

      <div>
        {/* {TODO: CHANGE TO LOAD WEAPONS FROM API} */}
        <SkinRow
          hideViewAllButton
          hideWeaponTitle
          weapons={Weapons['Pistols']}
        />
      </div>
    </main>
  )
}
