export interface Team {
  id: number
  name: string
  hltvProfile: string
  hltvRanking: number
  coachName?: string
  timeSinceLastUpdated: Date
}
