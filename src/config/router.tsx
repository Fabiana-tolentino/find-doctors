import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES

import { Spinner } from '@/components/ui'
import Dashbord from '@/pages/dashbord'
import { Login } from '@/components/login/Login'
import Layout from '@/pages/layout'
import Faq from '@/pages/faq'
import { AppContext } from '@/contexts/appContext'
import Users from '@/pages/users'
import { UsersAll } from '@/components/users/UsersAll'
import { UsersContractors } from '@/components/users/UsersContractors'
import { UsersDoctors } from '@/components/users/UsersDoctors'
import Profile from '@/pages/profile'
import { Data } from '@/components/profile/data'
import { Password } from '@/components/profile/Password'
import { Adm } from '@/components/profile/Adm'
import { Modal } from '@/components/profile/modal'
import Plans from '@/pages/plans'
import { Doctors } from '@/components/plans/doctors'
import { Contractors } from '@/components/plans/contractors'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashbord',
        element: <Dashbord />
      },
      {
        path: '/users',
        element: <Users />,
        children: [
          {
            path: '/users/all',
            element: <UsersAll />
          },
          {
            path: '/users/contractors',
            element: <UsersContractors />
          },
          {
            path: '/users/doctors',
            element: <UsersDoctors />
          }
        ]
      },
      {
        path: '/plans',
        element: <Plans />,
        children: [
          {
            path: '/plans/doctors',
            element: <Doctors />
          },
          {
            path: '/plans/contractors',
            element: <Contractors />
          }
        ]
      },
      {
        path: '/spec',
        element: <div> Especializações </div>
      },
      {
        path: '/notifications',
        element: <div> Notificações </div>
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          {
            path: '/profile/user-data',
            element: <Data />
          },
          {
            path: '/profile/password',
            element: <Password />
          },
          {
            path: '/profile/adm',
            element: <Adm />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default function Router() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <AppContext>
          <RouterProvider router={router} />
        </AppContext>
      </Suspense>
    </>
  )
}
