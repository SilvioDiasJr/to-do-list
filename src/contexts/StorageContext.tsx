import React, { createContext, ReactNode, useState, useEffect } from 'react'

import { configToast } from '@utils/toast'

type StorageContextData = {
  registerTasks(task: string): void
  deleteTask(task: number): void
  refreshTasksData(): void
  deleteCompletedTasks(): void
  data: Task[]
}

type StorageProviderProps = {
  children: ReactNode
}

interface Task {
  id: number
  task: string
  status: string
}

export const StorageContext = createContext({} as StorageContextData)

export function StorageProvider({ children }: StorageProviderProps) {
  const [data, setData] = useState<Task[]>([])
  const notifyDeleteTask = () => configToast({
    type: 'success',
    message: 'Tarefa deletada com  sucesso!!'
  })

  useEffect(() => {
    refreshTasksData()
  }, [])

  function registerTasks(task: string) {
    let arrayTask: Task[] = []
    const tasks = localStorage.getItem('@todoList')

    if (tasks) {
      arrayTask = JSON.parse(tasks)
    }

    const id = new Date()
    const newTask = {
      id: Number(id.getTime()),
      task,
      status: 'active'
    }

    arrayTask.push(newTask)
    localStorage.setItem('@todoList', JSON.stringify(arrayTask))
    setData(arrayTask)
  }

  function refreshTasksData() {
    const tasks = localStorage.getItem('@todoList')
    if (tasks) {
      setData(JSON.parse(tasks))
    }
  }

  function deleteCompletedTasks() {
    const tasks = data.filter(item => item.status !== 'completed')

    if (tasks.length >= 1) {
      setData(tasks)
      localStorage.setItem('@todoList', JSON.stringify(tasks))
    } else {
      setData([])
      localStorage.removeItem('@todoList')
    }
  }

  function deleteTask(value: number) {
    const tasks = data.filter(item => item.id !== value)
    localStorage.setItem('@todoList', JSON.stringify(tasks))
    setData(tasks)
    notifyDeleteTask()
  }

  return (
    <StorageContext.Provider value={{ registerTasks, refreshTasksData, deleteTask, deleteCompletedTasks, data }}>
      {children}
    </StorageContext.Provider>
  )
}
