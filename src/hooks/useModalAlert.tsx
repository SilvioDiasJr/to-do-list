import { useContext } from 'react'
import { ModalAlertContext } from '@contexts/ModalAlertContext'

export const useModalAlert = () => {
  return useContext(ModalAlertContext)
}