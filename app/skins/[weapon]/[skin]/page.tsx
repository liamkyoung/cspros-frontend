import PrimaryButtonLink from '@/components/Buttons/PrimaryButtonLink'
import SecondaryButtonLink from '@/components/Buttons/SecondaryButtonLink'
import { DEAGLE_PRINTSTREAM } from '@/data/skinData'
import { GetSkinRarityName } from '@/utils/SkinRarityUtilities'
import SkinContainer from './SkinContainer'
import PlayerContainer from './PlayerContainer'

/*
    NEEDS: TOP 5 Players using a particular skin and number of kills for each player
    ROUTE: /api/Skin/PlayersUsingSkin?skinName=Printstream&weaponDemoName=deagle
*/

export default function Page({
  params,
}: {
  params: { weapon: string; skin: string }
}) {
  return (
    <main className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 gap-8 mt-16">
        {/* {Weapon Container} */}
        <SkinContainer skin={DEAGLE_PRINTSTREAM} />

        {/* Player Container */}
        <PlayerContainer skin={DEAGLE_PRINTSTREAM} />
      </div>
    </main>
  )
}
