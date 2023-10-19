import { MdKeyboardArrowDown } from 'react-icons/md'
import menu from '../../assets/menu-bar.png'
import user from '../../assets/user.png'
import {
  AppContext,
  AppContextType,
  CreateAppContext
} from '@/contexts/appContext'
import { useContext } from 'react'
import { MiniPopup } from './MiniPopup'

export default function Header() {
  const { handleChangeData, handleViewPopup } =
    useContext<AppContextType>(CreateAppContext)
  return (
    <>
      <div className="flex justify-between items-center w-full h-fit bg-gray-button p-8 ">
        <div className="w-16">
          <button onClick={handleChangeData}>
            <img src={menu} alt="menuMed" />
          </button>
        </div>

        <div className="flex gap-4 items-center px-1">
          <img src={user} alt="userMed" className="" />
          <div className="flex flex-col">
            <strong> Izabel</strong>
            izabel@gmail.com
          </div>
          <button onClick={handleViewPopup} className="pl-8">
            <MdKeyboardArrowDown size={24} />
          </button>
        </div>
      </div>
    </>
  )
}
