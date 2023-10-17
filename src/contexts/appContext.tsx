import { createContext, useState } from 'react'

export type AppContextType = {
  data: DataType
  handleChangeData: () => void
}

type DataType = {
  value: boolean
}

type AppChildrenType = {
  children: React.ReactNode
}

export const CreateAppContext = createContext({} as AppContextType)

export function AppContext({ children }: AppChildrenType) {
  const [data, setData] = useState<DataType>({ value: false })
  function handleChangeData() {
    if (data.value === true) {
      setData({ ...data, value: false })
    } else {
      setData({ ...data, value: true })
    }
  }
  return (
    <CreateAppContext.Provider value={{ data, handleChangeData }}>
      {children}
    </CreateAppContext.Provider>
  )
}
