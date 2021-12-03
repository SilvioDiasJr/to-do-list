import { useContext } from 'react'
import { StorageContext } from '@contexts/StorageContext'

export const useStorageTask = () => {
  return useContext(StorageContext)
}