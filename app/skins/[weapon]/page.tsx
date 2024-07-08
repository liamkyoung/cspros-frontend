'use client'
import { getAllSkinsForWeapon } from '@/utils/data/Skins'
import { SkinProfile } from '@/types/viewmodels/types'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import SkinDisplay from '@/components/SkinDisplay'
import Spinner from '@/components/Spinner'
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
    <main className="mx-auto max-w-6xl mt-16 px-4 lg:px-0">
      <Link
        href="/skins"
        className="inline-flex gap-2 text-2xl items-center rounded-md bg-slate-700 px-4 py-2 ring-1 ring-white hover:bg-slate-500 hover:cursor-pointer"
      >
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

      {skins ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-16">
          {skins.map((skin) => (
            <SkinDisplay skin={skin} />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 p-8 rounded-md">
          <p className="text-white text-3xl">Loading Skins...</p>
          <Spinner />
        </div>
      )}
    </main>
  )
}
