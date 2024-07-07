import { TeamProfile } from '@/types/viewmodels/types'

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST

export const getAllTeams = async (): Promise<TeamProfile[] | null> => {
  try {
    const response = await fetch(`${BACKEND_HOST}/api/Player/GetAllTeams`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: TeamProfile[] = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}
