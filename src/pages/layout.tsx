import Header from '@/components/header'
import Main from '@/components/main'
import { Sidebar } from '@/components/sideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div className="flex h-screen w-full bg-gray">
        <Sidebar />
        <div className="w-full h-full">
          <Header />
          <Outlet />
        </div>
        {/* <Main /> */}
      </div>
    </>
  )
}
