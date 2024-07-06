import { Player } from '@/types/models/Player'
import { PlayerProfile } from '@/types/viewmodels/types'

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST

export const getTrendingPlayers = async (): Promise<PlayerProfile[] | null> => {
  try {
    const response = await fetch(`${BACKEND_HOST}/api/Player/TrendingPlayers`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: PlayerProfile[] = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}

export const getPlayer = async (
  playerName: string
): Promise<PlayerProfile | null> => {
  try {
    const response = await fetch(
      `${BACKEND_HOST}/api/Player/GetPlayer?playerName=${playerName}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: PlayerProfile = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}
