import { CreateAppContext } from '@/contexts/appContext'
import { MdClose } from 'react-icons/md'
import { useContext } from 'react'

export function Modal() {
  const { handleViewModal } = useContext(CreateAppContext)
  return (
    <div className="p-28 w-screen h-screen bg-black bg-opacity-50 fixed z-10 flex items-center justify-center  ">
      <div className="flex flex-col ">
        <div className="flex justify-between py-6 bg-gray rounded-t-3xl p-4">
          <div className="font-bold "> Novo Perfil</div>
          <button onClick={handleViewModal}>
            <MdClose />
          </button>
        </div>
        <div className="flex flex-col bg-white p-4  gap-4">
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
        <div className="p-10 bg-white rounded-b-3xl">
          <button className="bg-green-4 text-white rounded-xl py-4 px-20 font-semibold">
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  )
}
