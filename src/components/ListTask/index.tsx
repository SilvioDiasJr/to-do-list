import React, { useEffect, useState, useContext, useCallback } from 'react'

import { StorageContext } from '@contexts/StorageContext'

import { Filters } from '@components/Filters'
import { CardTask } from '@components/CardTask'

import { Container, Footer } from './styles'

interface Task {
  id: number
  task: string
  status: string
}

export const ListTask: React.FC = () => {
  const [taskFilters, setTaskFilters] = useState<Task[]>([])
  const [filters, setFilters] = useState<string>('all')

  const { data, deleteCompletedTasks } = useContext(StorageContext)

  const handleTask = useCallback(() => {
    setTaskFilters(data)
    handleTasksFilters(filters)
  }, [taskFilters, filters, data])

  useEffect(() => {
    handleTask()
  }, [data, filters])

  function handleTasksFilters(value: string) {
    setTaskFilters([])
    if (value !== 'all') {
      setTaskFilters(data.filter(item => item.status === value))
    } else {
      setTaskFilters(data)
    }
    setFilters(value)
  }

  return (
    <Container>
      {taskFilters?.map(item => (
        <CardTask
          key={item.id}
          taskId={item.id}
        />
      ))}
      <Footer>
        <span>{data?.filter(item => item.status === 'active').length} items ativos</span>

        <Filters
          onFilters={handleTasksFilters}
        />

        <button onClick={deleteCompletedTasks}>Limpar completas</button>
      </Footer>
    </Container>
  )
}