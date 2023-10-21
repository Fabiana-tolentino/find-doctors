import { TableUsers } from '../table/tableUsers'
import Input from '../ui/input'
import { useEffect, useState } from 'react'
import { getUsers } from '@/api/getUsers'

export function UsersAll() {
  const [users, setUsers] = useState()

  useEffect(() => {
    getUsers(setUsers)
  }, [])
  console.log(users)

  return (
    <div className="w-full h-full bg-white p-6 flex gap-8 flex-col rounded-2xl">
      <div className="flex ">
        <div className="flex w-[80%] gap-4">
          <div className="w-[40%]">
            <Input
              name={''}
              tipo={''}
              placeholder="Pesquise a palavra chave "
            />
          </div>
          <div className="flex w-[60rem] gap-4">
            <Input name={''} tipo={''} placeholder="Estado (UF)" />
            <Input name={''} tipo={''} placeholder="Cidade" />
            <Input name={''} tipo={''} placeholder="Especialidade" />
          </div>
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
            {users?.map(user => {
              return (
                <TableUsers
                  key={user.id}
                  user={user.firstName}
                  email={user.email}
                  whatsapp={user.phone}
                  spec={user.spec}
                  cite={user.cite}
                  state={user.state}
                  typeUser={user.typeUser}
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
