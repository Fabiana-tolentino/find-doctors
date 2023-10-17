import { BoxTitle } from '../boxSection/boxTitle'
import { BoxUser } from '../boxSection/boxUser'
import { dataUsersAll as data } from '@/api/Data'
import { TableUsers } from '../table/tableUsers'

export function UsersAll() {
  return (
    <div className="w-full h-full bg-white p-6 flex gap-8 flex-col rounded-2xl">
      <div>barra de pesquisa</div>
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
            {data.map(user => {
              return (
                <TableUsers
                  user={user.user}
                  email={user.email}
                  whatsapp={user.whatsapp}
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
