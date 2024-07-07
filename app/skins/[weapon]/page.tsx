'use client'
import { getAllSkinsForWeapon } from '@/utils/data/Skins'
import { SkinProfile } from '@/types/viewmodels/types'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import SkinDisplay from '@/components/SkinDisplay'
/*
    NEEDS: ALL SKINS FOR A PARTICULAR WEAPON, WEAPON FORMATTED NAME
    ROUTE: /api/Skin/GetAllSkinsForWeapon?weaponName=ak47
*/

export default function Page({ params }: { params: { weapon: string } }) {
  const [skins, setSkins] = useState<SkinProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getAllSkinsForWeapon(params.weapon)
      setSkins(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <main className="mx-auto max-w-6xl mt-16">
      <Link href="/skins" className="inline-flex gap-2 text-2xl items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        {params.weapon}
      </Link>

      <div className="grid grid-cols-4">
        {skins && skins.map((skin) => <SkinDisplay skin={skin} />)}
      </div>
    </main>
  )
}
