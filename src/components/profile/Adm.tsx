import edit from '../../assets/edit.png'
import delet from '../../assets/delete.png'
import add from '../../assets/add.png'
import { useContext } from 'react'
import { CreateAppContext } from '@/contexts/appContext'

export function Adm() {
  const { handleViewModal } = useContext(CreateAppContext)

  return (
    <>
      <div className="flex flex-col py-6 px-12">
        <div className="font-bold text-3xl py-10"> Adiministrar Perfis </div>
        <div className="flex justify-between gap-64 border-b-2 border-gray-300 py-4 text-xl">
          <div className="font-bold"> Bruno </div>
          <label>bruno@gmail.com</label>
          <button className="flex gap-4">
            <img
              src={edit}
              alt="edit"
              className="border border-gray-300 bg-white rounded-lg p-2"
            />
            <img
              src={delet}
              alt="edit"
              className="border border-gray-300 bg-white rounded-lg p-2"
            />
          </button>
        </div>
        <div className="flex justify-between gap-64 py-4 pt-8 border-b-2 border-gray-300 text-xl ">
          <div className="font-bold"> Júlio </div>
          <label>julio@gmail.com</label>

          <button className="flex gap-4">
            <img
              src={edit}
              alt="edit"
              className="border border-gray-300 bg-white rounded-lg p-2"
            />
            <img
              src={delet}
              alt="edit"
              className="border border-gray-300 bg-white rounded-lg p-2"
            />
          </button>
        </div>

        <div className="flex justify-between gap-64 py-4 pt-8 border-b-2 border-gray-300 text-xl ">
          <div className="font-bold"> Mariana </div>
          <label>mariana@gmail.com</label>

          <button className="flex gap-4 ">
            <img
              src={edit}
              alt="edit"
              className="border border-gray-300 bg-white rounded-lg p-2"
            />
            <img
              src={delet}
              alt="edit"
              className="border border-gray-300 bg-white rounded-lg p-2"
            />
          </button>
        </div>
        <div className="flex flex-center py-10 ">
          <button
            onClick={handleViewModal}
            className=" flex gap-2 border border-green bg-green rounded-2xl px-16 py-4  text-white"
          >
            <img src={add} alt="add" />
            Novo Perfil
          </button>
        </div>
      </div>
    </>
  )
}
