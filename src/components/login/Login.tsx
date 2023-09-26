import Button from '../ui/button'

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
            <label className="text-gray-800 text-sm mb-2 flex flex-col focus:bg-green-1 ">
              <span className="group-focus:text-green-2">E-mail</span>
              <input
                type="email"
                className="border border-gray-300 px-1 py-4 rounded-2xl focus:outline-green-2"
                placeholder="Digite seu e-mail"
              />
            </label>

            <label
              className="text-gray-800 text-sm mb-2 flex flex-col w-full"
              placeholder="Digite sua senha"
            >
              <span className="focus:text-green-2">Senha</span>
              <input
                type="password"
                className="border border-gray-300 px-1 py-4 rounded-2xl focus:outline-green-2"
                placeholder="Digite sua senha"
              />
            </label>

            <div className="flex gap-x-16 mt-7 ">
              <label htmlFor="remember" className="flex-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="focus:bg-blue-500 mr-2"
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
