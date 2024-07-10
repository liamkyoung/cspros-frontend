export type SkinProfile = {
  uri: string
  imageSrc: string
  weaponName: string
  skinName: string
  skinRarity: SkinRarity
  numberOfKills?: number
  gamesUsed?: number
}

export type PlayerProfile = {
  uri: string
  teamName: string
  teamProfileImage: string
  playerName: string
  countryAbbreviation?: string
  profileImage: string
}

export type TeamProfile = {
  players: PlayerProfile[]
  teamName: string
}

export type PlayersUsingSkin = {
  players: SkinUsage[]
  skin: SkinProfile
}

export type SkinUsage = {
  player: PlayerProfile
  gamesUsed: number
  totalKills: number
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
  CONSUMER,
  INDUSTRIAL,
  MILSPEC,
  RESTRICTED,
  CLASSIFIED,
  COVERT,
  EXTRAORDINARY,
  CONTRABAND,
}
