import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { RxExit } from 'react-icons/rx'
import { logout } from '@/services/authClient'

export function MiniPopup() {
  return (
    <div className="w-[12rem] h-[10] rounded-3xl bg-white absolute top-28 right-4 flex flex-col justify-center items-center shadow-lg text-gray-600 text-lg">
      <Link
        to={'/profile'}
        className="p-6  w-full text-start flex gap-2 items-center "
      >
        <BiUser size={28} />
        Usuário
      </Link>
      <div className="border-b-2 w-full h-1 border-gray-300 "></div>
      <button
        onClick={logout}
        className="p-6  w-full text-start flex gap-2 items-center"
      >
        <RxExit size={28} className="rotate-180" />
        Sair
      </button>
    </div>
  )
}
