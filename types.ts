export type WeaponSkinData = {
  skinUri: string
  imgSrc: string
  weaponName: string
  skinName: string
  skinRarity: SkinRarity
  numberOfUses: number
}

export type PlayerDisplayData = {
  playerUri: string
  teamName: string
  playerName: string
  flag: string // May have to be an icon?
  imgSrc: string
}

export type WeaponDisplayData = {
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

export enum LoadoutLinkType {
  NoLink,
  AllSkins,
  PlayerSkins,
}
