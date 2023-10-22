import { useForm } from 'react-hook-form'
import { LoginProps, login } from '@/services/login'

import { CreateAppContext } from '@/contexts/appContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const { register, handleSubmit } = useForm<LoginProps>()
  const navigate = useNavigate()
  const { data, userLoged } = useContext(CreateAppContext)
  const handleClick = async ({ email, password }: LoginProps) => {
    await login({ email, password }).then(() => {
      const token = localStorage.getItem('token_fd')

      if (token) {
        navigate('/dashbord')
      }
    })
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
            <div className="relative z-0 w-full mb-8">
              <input
                {...register('email')}
                type="email"
                name="email"
                id="email"
                className="block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 focus:outline-none appearance-none  focus:ring-0 focus:border-green peer "
                placeholder=" "
              />

              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-2 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 "
              >
                E-mail
              </label>
            </div>

            <div className="relative z-0 w-full mb-8">
              <input
                {...register('password')}
                type="password"
                name="password"
                id="password"
                className="block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 focus:outline-none appearance-none  focus:ring-0 focus:border-green peer "
                placeholder=" "
              />

              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-2 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 "
              >
                Senha
              </label>
            </div>

            <div className="flex gap-x-16 py-8">
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
            <button
              className="w-full py-3 bg-green-4 rounded-2xl text-white"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
