import { isAutheticated } from '@/services/authClient'
import { createContext, useState } from 'react'

export type AppContextType = {
  data: DataType
  handleChangeData: () => void
  handleViewModal: () => void
  handleViewPopup: () => void
  userLoged: () => void
}

type DataType = {
  isOpenMenu: boolean
  isOpenModalFull: boolean
  isOpenPopup: boolean
  isAuthenticated: boolean
}

type AppChildrenType = {
  children: React.ReactNode
}

export const CreateAppContext = createContext({} as AppContextType)

export function AppContext({ children }: AppChildrenType) {
  const [data, setData] = useState<DataType>({
    isOpenMenu: false,
    isOpenModalFull: false,
    isOpenPopup: false,
    isAuthenticated: false
  })

  function handleChangeData() {
    if (data.isOpenMenu) {
      setData({ ...data, isOpenMenu: false })
    } else {
      setData({ ...data, isOpenMenu: true })
    }
  }

  function handleViewModal() {
    if (data.isOpenModalFull) {
      setData({ ...data, isOpenModalFull: false })
    } else {
      setData({ ...data, isOpenModalFull: true })
    }
  }

  function handleViewPopup() {
    if (data.isOpenPopup) {
      setData({ ...data, isOpenPopup: false })
    } else {
      setData({ ...data, isOpenPopup: true })
    }
  }

  function userLoged() {
    const hasToken = () => localStorage.getItem('token_fd')
    if (hasToken !== null) {
      setData({ ...data, isAuthenticated: true })
    } else {
      setData({ ...data, isAuthenticated: false })
    }
  }

  return (
    <CreateAppContext.Provider
      value={{
        data,
        handleChangeData,
        handleViewModal,
        handleViewPopup,
        userLoged
      }}
    >
      {children}
    </CreateAppContext.Provider>
  )
}
