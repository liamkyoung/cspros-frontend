'use client'
import PlayerDisplay from '@/components/PlayerDisplay'
import TeammateDisplay from '@/components/TeammateDisplay'
import FavoriteWeapon from './FavoriteWeapon'
import Breadcrumbs from './Breadcrumbs'
import { getPlayer, getTeammates } from '@/utils/data/Players'
import { useState, useEffect } from 'react'
import {
  PlayerProfile,
  SkinProfile,
  SkinRarity,
} from '@/types/viewmodels/types'
import { getPopularSkinsForPlayerAndWeapon } from '@/utils/data/Skins'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'

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
      setTeammates(teammateData)
      setSkinProfiles(skinProfileData)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-16 mx-10 lg:mx-40">
      <div className="col-span-1">
        {playerProfile && <PlayerDisplay player={playerProfile} />}

        <div className="lg:flex gap-16 mx-auto hidden">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Teammates</h2>
            {teammates &&
              teammates.map((p) => (
                <TeammateDisplay key={p.playerName} player={p} />
              ))}
          </div>
        </div>
      </div>

      {skinProfiles && skinProfiles.length > 0 ? (
        <div className="col-span-2 space-y-4">
          <Breadcrumbs playerName={params.player} weaponName={params.weapon} />
          <div className="grid grid-cols-2 gap-x-6">
            {skinProfiles.map((skin, i) => (
              <FavoriteWeapon key={skin.skinName} skin={skin} large={i == 0} />
            ))}
          </div>
        </div>
      ) : (
        <div className="col-span-2  flex items-center justify-center flex-col">
          <div className="bg-slate-600 text-center text-xl p-16 rounded-md">
            <p className="mb-4 font-medium">
              No instances found of {params.player} using a {params.weapon} with
              a skin.
            </p>
            {playerProfile && (
              <SecondaryButtonLink
                href={`${playerProfile?.uri}`}
                text={`Back to ${params.player}'s profile`}
                hasArrow
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}
