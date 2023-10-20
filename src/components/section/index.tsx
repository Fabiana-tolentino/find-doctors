import { MdOutlineEast } from 'react-icons/md'
import { BoxUser } from '../boxSection/boxUser'
import { BoxTitle } from '../boxSection/boxTitle'
import { Link } from 'react-router-dom'

export const data = [
  {
    name: 'Fernando',
    email: 'fernando@gmail.com',
    contact: '3199999999',
    typeUser: 'medico'
  },
  {
    name: 'bernardo',
    email: 'fernando@gmail.com',
    contact: '3199999999',
    typeUser: 'medico'
  },
  {
    name: 'carlos',
    email: 'fernando@gmail.com',
    contact: '3199999999',
    typeUser: 'medico'
  }
]

export default function Section() {
  return (
    <div className="flex-1  items-center w-full h-fit bg-white rounded-2xl m-10 p-4 ">
      <div className="flex justify-between text-xl rounded-2xl p-6 ">
        <strong>Ultimos usuários cadastrados</strong>
        <button className="text-base flex gap-2">
          <Link to={'/users'}>Ver tudo</Link>
          <MdOutlineEast size={20} />
        </button>
      </div>

      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <BoxTitle />
          <tbody className="p-2">
            {data.map(user => {
              return (
                <BoxUser
                  user={user.name}
                  email={user.email}
                  contact={user.contact}
                  typeUser={user.typeUser}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
