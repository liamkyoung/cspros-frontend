import { SkinProfile } from '@/types/viewmodels/types'

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
