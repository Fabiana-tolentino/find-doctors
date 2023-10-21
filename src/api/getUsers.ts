import { api } from '@/services/api'

export const getUserDashboard = async (event: Function) => {
  const res = await api.get('/users/dashboard')
  event(res.data)
}

export const getUsers = async (event: Function) => {
  const res = await api.get('/users')
  event(res.data.content)
}
