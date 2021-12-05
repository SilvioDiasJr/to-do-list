import React, { createContext, ReactNode, useState } from 'react'

type ModalAlertProps = {
  title: string
  description: string
  buttonCancel: string
  buttonConfirm: string
  onRequestConfirm(): void
}

type ModalAlertContextData = {
  data: ModalAlertProps | null
  isOpenModalAlert: boolean
  openModalAlert(value: ModalAlertProps): void
  handleConfirmAlert(): void
  onCloseModalAlert(): void
}

type ModalAlertProviderProps = {
  children: ReactNode
}

export const ModalAlertContext = createContext({} as ModalAlertContextData)

export const ModalAlertProvider: React.FC<ModalAlertProviderProps> = ({ children }) => {
  const [isOpenModalAlert, setOpenModalAlert] = useState(false)
  const [data, setData] = useState<ModalAlertProps | null>(null)

  function openModalAlert(value: ModalAlertProps) {
    setData(value)
    setOpenModalAlert(true)
  }

  function handleConfirmAlert() {
    data?.onRequestConfirm()
    setOpenModalAlert(false)
  }

  function onCloseModalAlert() {
    setOpenModalAlert(false)
  }

  return (
    <ModalAlertContext.Provider value={{
      data,
      openModalAlert,
      isOpenModalAlert,
      handleConfirmAlert,
      onCloseModalAlert
    }}
    >
      {children}
    </ModalAlertContext.Provider>
  )
}