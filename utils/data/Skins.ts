import { SkinProfile, PlayersUsingSkin } from '@/types/viewmodels/types'

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST

export const getAllSkinsForWeapon = async (
  weaponNormalizedName: string
): Promise<SkinProfile[] | null> => {
  try {
    const response = await fetch(
      `${BACKEND_HOST}/api/Skin/GetAllSkinsForWeapon?weaponName=${weaponNormalizedName}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: SkinProfile[] = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}

export const getPopularSkinsForWeapon = async (
  weaponNormalizedName: string
): Promise<SkinProfile[] | null> => {
  try {
    const response = await fetch(
      `${BACKEND_HOST}/api/Skin/GetPopularSkinsForWeapon?weaponName=${weaponNormalizedName}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: SkinProfile[] = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}

export const getPopularPlayersUsingSkin = async (
  skinName: string,
  weaponName: string
): Promise<PlayersUsingSkin | null> => {
  try {
    const response = await fetch(
      `${BACKEND_HOST}/api/Skin/PlayersUsingSkin?skinName=${skinName}&weaponName=${weaponName}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: PlayersUsingSkin = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}

export const getPopularSkinsForPlayerAndWeapon = async (
  playerName: string,
  weaponName: string
): Promise<SkinProfile[] | null> => {
  try {
    const response = await fetch(
      `${BACKEND_HOST}/api/Skin/GetPopularSkinsForPlayerAndWeapon?playerName=${playerName}&weaponName=${weaponName}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: SkinProfile[] = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}

export const getTrendingSkins = async (): Promise<SkinProfile[] | null> => {
  try {
    const response = await fetch(`${BACKEND_HOST}/api/Skin/TrendingSkins`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: SkinProfile[] = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}
