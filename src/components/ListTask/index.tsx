import React, { useEffect, useState, useCallback } from 'react'

import { useStorageTask } from '@hooks/useStorageTask'
import { useModalAlert } from '@hooks/useModalAlert'
import { TaskData } from '@dtos/task'

import { Filters } from '@components/Filters'
import { CardTask } from '@components/CardTask'

import { Container, Footer } from './styles'

export const ListTask: React.FC = () => {
  const [taskFilters, setTaskFilters] = useState<TaskData[]>([])
  const [filters, setFilters] = useState<string>('all')

  const { data, deleteCompletedTasks } = useStorageTask()
  const { openModalAlert } = useModalAlert()

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

  function deleteTasksCompleted() {
    const tasksCompleted = data.filter(item => item.status === 'completed')

    if (tasksCompleted.length >= 1) {
      openModalAlert({
        title: 'Deseja excluir todas as tarefas concluídas?',
        description: 'Ao confirmar as tarefas não estarão mais disponíveis.',
        buttonConfirm: 'Sim, desejo excluir.',
        buttonCancel: 'Não',
        onRequestConfirm: () => deleteCompletedTasks()
      })
    }
  }

  return (
    <Container>
      {(taskFilters.length === 0 && filters === 'active')
        && <p>Nenhuma tarefa para ser concluída no momento.</p>
      }

      {(taskFilters.length === 0 && filters === 'completed')
        && <p>Nenhuma tarefa concluída no momento.</p>
      }

      {taskFilters.length >= 1 &&
        taskFilters?.map(item => (
          <CardTask
            key={item.id}
            taskId={item.id}
          />
        ))
      }

      <Footer>
        <span>{data?.filter(item => item.status === 'active').length} items ativos</span>

        <Filters
          onFilters={handleTasksFilters}
        />

        <button onClick={deleteTasksCompleted}>Limpar completas</button>
      </Footer>
    </Container>
  )
}