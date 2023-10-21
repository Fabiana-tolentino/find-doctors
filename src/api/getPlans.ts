import { api } from '@/services/api'

export const getPlans = async (event: Function, value?: string) => {
  const res = await api.get(`/plans?type=${value}`)
  event(res.data.content)
}
