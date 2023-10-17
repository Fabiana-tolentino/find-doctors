import Button from '../ui/button'
import { MdAdd } from 'react-icons/md'
import Input from '../ui/input'

export function Login() {
  return (
    <div className="bg-green-4 w-screen h-screen flex justify-center items-center flex-col ">
      <div className="w-[42rem] h-[48.5rem] bg-white rounded-3xl flex flex-col items-center justify-center px-32">
        <div className="my-10 flex flex-col w-full gap-2 justify-start">
          <h3 className="text-xl">Seja bem vindo! </h3>
          <h1 className="text-4xl font-bold">Realize o seu Login</h1>
        </div>
        <form className="w-full">
          <div>
            <div className="flex flex-col gap-3">
              <Input name={'E-mail '} tipo="email" />
              <Input name={'Senha'} tipo="password" />
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
            <Button>Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
