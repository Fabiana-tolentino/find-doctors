import { getUserCount } from '@/api/getUsers'
import { bgUsersAll } from '@/functions/pages/users'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export interface countOption {
  total: number
  totalDoctors: number
  totalContractor: number
}

export default function Users() {
  const [count, setCount] = useState<countOption>()

  const navigate = useNavigate()
  const locationNow = useLocation().pathname

  useEffect(() => {
    getUserCount(setCount)
    if (locationNow === '/users') {
      navigate('/users/all')
    }
  }, [])

  console.log(count)

  const all = bgUsersAll(locationNow, '/users/all')
  const contractors = bgUsersAll(locationNow, '/users/contractors')
  const doctors = bgUsersAll(locationNow, '/users/doctors')

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold pb-10">Usuarios Cadastrados</h1>
      <div>
        <div className="flex gap-4 text-xl ">
          <Link
            to={'/users/all'}
            className={`flex gap-4 bg-gray-300 ${all?.bg1} px-8 py-3 items-center rounded-t-2xl`}
          >
            <span className={`${all?.font}`}>Todos</span>
            <span
              className={`bg-green-1 ${all?.bg2} ${all?.textColor} py-1 px-3 rounded-2xl`}
            >
              {count?.total}
            </span>
          </Link>
          <Link
            to={'/users/contractors'}
            className={`flex gap-4 bg-gray-300 ${contractors?.bg1}  rounded-t-2xl px-8 py-3 items-center`}
          >
            <span className={`${contractors?.font}`}>Contratantes</span>
            <span
              className={`bg-green-1 ${contractors?.bg2} ${contractors?.textColor} py-1 px-3 rounded-2xl`}
            >
              {count?.totalContractor}
            </span>
          </Link>
          <Link
            to={'/users/doctors'}
            className={`flex gap-4 bg-gray-300 ${doctors?.bg1}  px-8 py-3 items-center rounded-t-2xl`}
          >
            <span className={`${doctors?.font}`}>Medicos</span>
            <span
              className={`bg-green-1 ${doctors?.bg2} ${doctors?.textColor} py-1 px-3 rounded-2xl`}
            >
              {count?.totalDoctors}
            </span>
          </Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
