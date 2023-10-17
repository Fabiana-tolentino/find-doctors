import check from '../../assets/check.png'

export function Password() {
  return (
    <div className="flex flex-col py-6 px-12">
      <div className="font-bold text-3xl py-10"> Alterar senha </div>
      <div className="flex flex-col">
        <div className="flex gap-64 border-b-2 border-gray-300 pb-8 text-xl">
          <div className="font-bold"> Senha atual: </div>

          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-lg"
          ></input>
        </div>

        <div className="flex   gap-64 py-10 border-b-2 border-gray-300 text-xl ">
          <div className="font-bold"> Nova senha: </div>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-lg"
          ></input>
        </div>

        <div className="flex gap-52  py-10 border-b-2 border-gray-300 text-xl ">
          <div className="font-bold"> Confirmar senha: </div>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-lg"
          ></input>
        </div>
      </div>
      <div className="p-10 text-center">
        <button className="px-10 py-2 bg-green-4 text-white border-2 rounded-md">
          Salvar
        </button>
      </div>
    </div>
  )
}
