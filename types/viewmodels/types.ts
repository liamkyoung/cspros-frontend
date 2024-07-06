import { Team } from '../models/Team'

export type SkinProfile = {
  uri: string
  imageSrc: string
  weaponName: string
  skinName: string
  skinRarity: SkinRarity
  numberOfKills: number
}

export type PlayerProfile = {
  uri: string
  team: Team
  playerName: string
  countryAbbreviation?: string
  profileImage: string
}

export type WeaponProfile = {
  weaponName: string
  normalizedName: string
  imgSrc: string
  weaponType: WeaponType
  teamAssigned: TeamAssigned
}

export type TeammateDisplayData = {
  playerName: string
  imgSrc: string
}

export enum TeamAssigned {
  BOTH,
  T,
  CT,
}

export enum WeaponType {
  PISTOL,
  SMG,
  HEAVY,
  RIFLE,
}

export enum SkinRarity {
  CONSUMER = 'WHITE',
  INDUSTRIAL = 'LIGHTBLUE',
  MILSPEC = 'BLUE',
  RESTRICTED = 'PURPLE',
  CLASSIFIED = 'PINK',
  COVERT = 'RED',
  EXTRAORDINARY = 'GOLD',
  CONTRABAND = 'ORANGE',
}
