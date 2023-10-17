import { MdClose } from 'react-icons/md'

export function Modal() {
  return (
    <div className="p-28 ">
      <div className="flex flex-col border border-gray-300 rounded-3xl ">
        <div className="flex justify-between py-6 bg-gray  p-4">
          <div className="font-bold "> Novo Perfil</div>
          <button>
            <MdClose />
          </button>
        </div>
        <div className="flex flex-col bg-white p-4 gap-4">
          <label className="text-sm text-gray-600">Nome</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2"
          ></input>

          <label className="text-sm text-gray-600">E-mail</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-2"
          ></input>

          <label className="text-sm text-gray-600">Senha</label>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-2"
          ></input>

          <label className="text-sm text-gray-600">Confirmar senha</label>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-2"
          ></input>
        </div>
        <div className="p-10 bg-white">
          <button className="bg-green-4 text-white rounded-xl py-4 px-20 font-semibold">
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  )
}
