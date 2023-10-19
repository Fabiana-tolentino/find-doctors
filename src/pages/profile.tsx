import { ProfileButton } from '@/components/ui/button/profileButton'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()
  const locationNow = useLocation()

  useEffect(() => {
    if (locationNow.pathname === '/profile') {
      navigate('/profile/user-data')
    }
  })

  return (
    <div className="flex p-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Edição de perfil </h1>
        <div className="flex flex-col gap-4">
          <ProfileButton> Dados </ProfileButton>
          <ProfileButton> Alterar senha </ProfileButton>
          <ProfileButton> Administradores </ProfileButton>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
