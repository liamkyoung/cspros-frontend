import { AppStats } from '@/types/viewmodels/types'

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST

export const getAppStats = async (): Promise<AppStats | null> => {
  try {
    const response = await fetch(`${BACKEND_HOST}/api/General/AppStats`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: AppStats = await response.json()

    return data
  } catch (error) {
    console.error('There was an error fetching the data:', error)
    return null
  }
}
