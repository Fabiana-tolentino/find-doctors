import { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Users() {
  const navigate = useNavigate()
  const locationNow = useLocation()

  useEffect(() => {
    if (locationNow.pathname === '/users') {
      navigate('/users/all')
    }
  })
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">Usuarios Cadastrados</h1>
      <div>
        <div className="flex gap-4 text-xl ">
          <Link
            to={'/users/all'}
            className="flex gap-4 bg-gray-300 px-4 py-2 items-center rounded-t-2xl"
          >
            <button>Todos</button>
            <span className="bg-green-1 py-1 px-3 rounded-2xl">1200</span>
          </Link>
          <Link
            to={'/users/contractors'}
            className="flex gap-4 bg-gray-300  rounded-t-2xl px-4 py-2 items-center"
          >
            <button>Contratantes</button>
            <span className="bg-green-1 py-1 px-3 rounded-2xl">200</span>
          </Link>
          <Link
            to={'/users/doctors'}
            className="flex gap-4 bg-gray-300 px-4 py-2 items-center rounded-t-2xl"
          >
            <button>Medicos</button>
            <span className="bg-green-1 py-1 px-3 rounded-2xl">1000</span>
          </Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
