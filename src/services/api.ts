import axios from 'axios'
import { getTokenLocal } from './authClient'
// const token = 'Bearer ' + getToken

export const api = axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev/',
  timeout: 3000
})

api.interceptors.request.use(async config => {
  const token = getTokenLocal()
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  // console.log(config)
  return config
})
