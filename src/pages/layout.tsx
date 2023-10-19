import Header from '@/components/header'
import { MiniPopup } from '@/components/header/MiniPopup'
import Main from '@/components/main'
import { Modal } from '@/components/profile/modal'
import { Sidebar } from '@/components/sideBar'
import { CreateAppContext } from '@/contexts/appContext'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const { data } = useContext(CreateAppContext)
  return (
    <>
      <div className="flex h-screen w-full bg-gray">
        {data.isOpenModalFull && <Modal />}
        <Sidebar />
        <div className="w-full h-full">
          <Header />
          <div>{data.isOpenPopup && <MiniPopup />}</div>
          <Outlet />
        </div>
        {/* <Main /> */}
      </div>
    </>
  )
}
