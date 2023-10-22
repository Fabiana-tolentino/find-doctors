import { api } from '@/services/api'

export const getUserDashboard = async (event: Function) => {
  const res = await api.get('/users/dashboard')
  event(res.data)
}

export const getUsers = async (event: Function, page?: number) => {
  const res = await api.get('/users', {
    params: {
      page,
      size: 6
    }
  })
  event(res.data.content)
}
export const getUserCount = async (event: Function) => {
  const res = await api.get('/users/count')
  event(res.data)
}

export const setNumberOfPagesFunction = async (event: Function) => {
  const res = await api.get('/users')
  event(res.data.totalPages)
}
