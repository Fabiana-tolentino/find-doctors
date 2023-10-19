import { Password } from '@/components/profile/Password'
import { api } from './api'
import { setToken } from './authClient'
import { redirect } from 'react-router-dom'

export interface LoginProps {
  email: string
  password: string
}

export async function login({ email, password }: LoginProps) {
  const response = await api.post(
    `public/register/login?email=${email}&password=${password}`
  )

  setToken(response.data.token)

  return console.log(response.data)
}
