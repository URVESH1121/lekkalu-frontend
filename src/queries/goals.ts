import { AddGoalSchema } from '@/schema/goals'
import { Goal, GoalProportionalityType, KpiType, Timeline } from '@/types/goals'
import { v1ApiClient, v2ApiClient } from '@/utils/client'

export async function fetchGoals() {
  const { data } = await v2ApiClient.get<Goal[]>('financial_goal/')
  return data
}

export async function addGoal(dto: AddGoalSchema) {
  const { data } = await v2ApiClient.post('financial_goal/', dto)
  return data
}

export async function editGoal(id: number, dto: Partial<AddGoalSchema>) {
  const { data } = await v1ApiClient.put(`financial_goal/${id}`, dto)
  return data
}

export async function deleteGoal(id: number) {
  const { data } = await v1ApiClient.delete(`financial_goal/${id}`)
  return data
}

export async function getGoalProgress(id: number) {
  const { data } = await v2ApiClient.get<{ name: string; progress_percent: number }>(`financial_goal/progress/${id}`)
  return data
}

export async function fetchGoalDetails(id: number) {
  const { data } = await v2ApiClient.get<Goal>(`financial_goal/${id}`)
  return data
}

export async function fetchGoalTimeline(id: number) {
  const { data } = await v2ApiClient.get<Timeline[]>(`financial_goal/timeline/${id}`)
  return data
}

export async function fetchGoalProportionalityTypes() {
  const { data } = await v2ApiClient.get<GoalProportionalityType[]>('financial_goal/goal_proportionality_type')
  return data
}

export async function fetchKPITypes() {
  const { data } = await v2ApiClient.get<KpiType[]>('financial_goal/kpis_type')
  return data
}
