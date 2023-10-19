import Button from '../ui/button'
import { MdAdd } from 'react-icons/md'
import Input from '../ui/input'
import { useForm } from 'react-hook-form'
import { LoginProps, login } from '@/services/login'
import { isAutheticated } from '@/services/authClient'
import { CreateAppContext } from '@/contexts/appContext'
import { useContext } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

export function Login() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { data, userLoged } = useContext(CreateAppContext)
  const handleClick = async ({ email, password }: LoginProps) => {
    await login({ email, password })

    userLoged()
    if (data.isAuthenticated) {
      navigate('/dashbord')
    }
    // console.log(authCheck())
  }

  return (
    <div className="bg-green-4 w-screen h-screen flex justify-center items-center flex-col ">
      <div className="w-[42rem] h-[48.5rem] bg-white rounded-3xl flex flex-col items-center justify-center px-32">
        <div className="my-10 flex flex-col w-full gap-2 justify-start">
          <h3 className="text-xl">Seja bem vindo! </h3>
          <h1 className="text-4xl font-bold">Realize o seu Login</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit(handleClick)}>
          <div>
            <div className="flex flex-col gap-3">
              email:{' '}
              <input
                {...register('email')}
                type="email"
                name="email"
                id="email"
              />
              password:{' '}
              <input
                {...register('password')}
                type="password"
                name="password"
                id="password"
              />
            </div>

            <div className="flex gap-x-16 mt-7 ">
              <label htmlFor="remember" className="flex-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-blue-500 mr-2"
                />
                Lembrar-me
              </label>
              <a href="" className="">
                Esqueci minha senha
              </a>
            </div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
