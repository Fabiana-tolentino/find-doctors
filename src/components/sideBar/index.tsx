import dashbord from '../../assets/dashboard.png'
import logoMed from '../../assets/LogoMed.png'
import register from '../../assets/register-users.png'
import plans from '../../assets/plans.png'
import specialities from '../../assets/specialities.png'
import notification from '../../assets/notifications.png'
import faq from '../../assets/faq.png'

import { Link } from 'react-router-dom'
import ButtonDefault from '../ui/button'
import { AppContextType, CreateAppContext } from '@/contexts/appContext'
import { useContext } from 'react'
import { SideBarFull } from './sideBarFull'
import { SideBarSmall } from './sideBarSmall'

export function Sidebar() {
  const { data } = useContext<AppContextType>(CreateAppContext)
  if (data.value === false) {
    return <SideBarSmall />
  }

  return <SideBarFull />
}
