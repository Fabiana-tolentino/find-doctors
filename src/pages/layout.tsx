import Header from '@/components/header'
import { MiniPopup } from '@/components/header/MiniPopup'
import Main from '@/components/main'
import { Modal } from '@/components/profile/modal'
import { Sidebar } from '@/components/sideBar'
import { CreateAppContext } from '@/contexts/appContext'
import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
  const { data, userLoged } = useContext(CreateAppContext)

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token_fd')

    if (!token) {
      console.log(token)
      navigate('/login')
    }
  }, [])

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
