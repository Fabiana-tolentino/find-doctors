import Button from '@/components/ui/button'
import { ProfileButton } from '@/components/ui/button/profileButton'
import { Outlet } from 'react-router-dom'

export default function Profile() {
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
