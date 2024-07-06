import { Country } from './Country'
import { PlayerSocials } from './PlayerSocials'
import { Team } from './Team'

export interface Player {
  id: number
  country?: Country
  countryId?: number
  name: string
  gamerTag: string
  profileImage?: string
  playerSocials?: PlayerSocials
  team?: Team
  likes: number
  dislikes: number
  nicknames?: string[]
  age: number
  hltvLink: string
  timeSinceLastUpdated: Date // DateTimeOffset is represented as a string in JSON
}
