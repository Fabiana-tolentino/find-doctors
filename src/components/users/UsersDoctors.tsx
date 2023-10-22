import { getUserCount, getUsers } from '@/api/getUsers'

import { useState, useEffect } from 'react'
import { TableUsers } from '../table/tableUsers'
import Input from '../ui/input'
import { userOptions } from './UsersAll'
import { Search } from './search'
import { countOption } from '@/pages/users'

export function UsersDoctors() {
  const [usersDoctors, setUsersDoctors] = useState()
  const [count, setCount] = useState<countOption>()

  useEffect(() => {
    getUsers(setUsersDoctors)
    getUserCount(setCount)
  }, [])

  return (
    <div className="w-full h-full bg-white p-6 flex gap-8 flex-col rounded-2xl">
      <div className="flex">
        <Search />

        <div className="w-full"></div>
        <div className="flex flex-col gap-2">
          <span className="text-base  w-40">Total de médicos</span>
          <span className="text-xl font-semibold">{count?.totalDoctors}</span>
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
            {usersDoctors?.map((user: userOptions) => {
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
      <div>paginação</div>
    </div>
  )
}
