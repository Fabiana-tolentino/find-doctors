import { AppContextType, CreateAppContext } from '@/contexts/appContext'
import { useContext } from 'react'
import { SideBarFull } from './sideBarFull'
import { SideBarSmall } from './sideBarSmall'

export function Sidebar() {
  const { data } = useContext<AppContextType>(CreateAppContext)
  if (data.isOpenMenu) {
    return <SideBarSmall />
  }

  return <SideBarFull />
}
