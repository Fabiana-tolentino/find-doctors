import { TableUsers } from '../table/tableUsers'
import Input from '../ui/input'
import { useEffect, useState } from 'react'
import {
  getUserCount,
  getUsers,
  setNumberOfPagesFunction
} from '@/api/getUsers'
import { Search } from './search'
import { countOption } from '@/pages/users'

export interface userOptions {
  id: string
  firstName: string
  email: string
  phone: string
  spec: string
  city: string
  state: string
  typeUser: string
  map: any
}

export function UsersAll() {
  const [users, setUsers] = useState<userOptions>()
  const [count, setCount] = useState<countOption>()
  const [page, setPage] = useState(0)
  const [numberOfPages, setNumberOfPages] = useState(0)

  useEffect(() => {
    getUsers(setUsers, page)
    getUserCount(setCount)
    setNumberOfPagesFunction(setNumberOfPages)
  }, [])

  return (
    <div className="w-full h-full bg-white p-6 flex gap-8 flex-col rounded-2xl">
      <div className="flex">
        <Search />

        <div className="w-full"></div>
        <div className="flex flex-col gap-2">
          <span className="text-base  w-40">Total de usuários</span>
          <span className="text-xl font-semibold">{count?.total}</span>
        </div>
      </div>

      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <thead className="bg-green-4 h-16 text-white text-base ">
            <tr className="rounded-xl bg-green-4 text-white">
              <th className="border-b-2 font-normal text-left p-8">Usuário</th>
              <th className="border-b-2 font-normal text-left">Email</th>
              <th className="border-b-2 font-normal text-left">Whatsapp</th>
              <th className="border-b-2 font-normal text-left">
                Especialidades
              </th>
              <th className="border-b-2 font-normal text-left">Cidade</th>
              <th className="border-b-2 font-normal text-left">Estado</th>

              <th className="border-b-2 font-normal text-left">
                Tipo de usuário
              </th>
            </tr>
          </thead>
          <tbody className="p-2">
            {users?.map((user: userOptions) => {
              return (
                <TableUsers
                  key={user.id}
                  user={user.firstName}
                  email={user.email}
                  whatsapp={user.phone}
                  spec={'Não informado'}
                  city={'Não informado'}
                  state={'Não informado'}
                  typeUser={'Não informado'}
                />
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 text-lg">
        <button
          onClick={() => page > 0 && setPage(page - 1)}
          disabled={page === 0}
        >
          Página Anterior
        </button>

        <div className="flex gap-2 font-semibold">
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
          <button onClick={() => setPage(3)}>3</button>
          <button onClick={() => setPage(4)}>4</button>
        </div>
        <button
          onClick={() => page < numberOfPages && setPage(page + 1)}
          disabled={page === numberOfPages - 1}
        >
          Próxima Página
        </button>
      </div>
    </div>
  )
}
