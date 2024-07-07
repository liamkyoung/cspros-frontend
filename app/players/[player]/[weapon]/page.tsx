'use client'
import PlayerDisplay from '@/components/PlayerDisplay'
import TeammateDisplay from '@/components/TeammateDisplay'
import FavoriteWeapon from './FavoriteWeapon'
import Breadcrumbs from './Breadcrumbs'
import { getPlayer, getTeammates } from '@/utils/data/Players'
import { useState, useEffect } from 'react'
import { PlayerProfile, SkinProfile } from '@/types/viewmodels/types'
import { getPopularSkinsForPlayerAndWeapon } from '@/utils/data/Skins'

/*
    NEEDS: MOST USED 3 SKINS FOR SPECIFIC PLAYER AND SPECIFIC WEAPON
    ROUTE: /api/Skin/GetPopularSkinsForPlayerAndWeapon?playerName=apEX&weaponName=usp_silencer
*/

export default function Page({
  params,
}: {
  params: { player: string; weapon: string }
}) {
  const [playerProfile, setPlayer] = useState<PlayerProfile | null>(null)
  const [teammates, setTeammates] = useState<PlayerProfile[] | null>(null)
  const [skinProfiles, setSkinProfiles] = useState<SkinProfile[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const playerProfileData = await getPlayer(params.player)
      const skinProfileData = await getPopularSkinsForPlayerAndWeapon(
        params.player,
        params.weapon
      )
      const teammateData = await getTeammates(params.player)
      setPlayer(playerProfileData)
      setTeammates(teammates)
      setSkinProfiles(skinProfileData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className="grid grid-cols-3 gap-4 p-16">
      <div className="col-span-1">
        {playerProfile && <PlayerDisplay player={playerProfile} />}

        <div className="flex gap-16 mx-auto mt-24">
          <div className="space-y-4">
            <h2>Teammates</h2>
            {teammates && teammates.map((p) => <TeammateDisplay player={p} />)}
          </div>
        </div>
      </div>

      {/* Weapon List */}
      <div className="col-span-2">
        <Breadcrumbs playerName={params.player} weaponName={params.weapon} />
        <div className="grid grid-cols-2 gap-4">
          {skinProfiles &&
            skinProfiles.map((skin, i) => (
              <FavoriteWeapon skin={skin} large={i == 0} />
            ))}
        </div>
      </div>
    </main>
  )
}
