import React, { createContext, ReactNode, useState, useEffect } from 'react'

import { configToast } from '@utils/toast'
import { TaskData } from '@dtos/task'

type StorageContextData = {
  registerTasks(task: string): void
  deleteTask(task: number): void
  refreshTasksData(): void
  deleteCompletedTasks(): void
  data: TaskData[]
}

type StorageProviderProps = {
  children: ReactNode
}

export const StorageContext = createContext({} as StorageContextData)

export function StorageProvider({ children }: StorageProviderProps) {
  const [data, setData] = useState<TaskData[]>([])
  const notifyDeleteTask = () => configToast({
    type: 'warning',
    message: 'Tarefa excluída.'
  })

  const notifyDeleteTasksCompleted = () => configToast({
    type: 'warning',
    message: 'Todas as tarefas completadas foram excluídas.'
  })

  useEffect(() => {
    refreshTasksData()
  }, [])

  function registerTasks(task: string) {
    let arrayTask: TaskData[] = []
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
    const tasksCompleted = data.filter(item => item.status === 'completed')

    if (tasksCompleted.length >= 1) {
      const tasks = data.filter(item => item.status !== 'completed')

      if (tasks.length >= 1) {
        setData(tasks)
        localStorage.setItem('@todoList', JSON.stringify(tasks))
      } else {
        setData([])
        localStorage.removeItem('@todoList')
      }

      notifyDeleteTasksCompleted()
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
