import React, { useState, useEffect } from 'react'

import { useModalAlert } from '@hooks/useModalAlert'
import { useStorageTask } from '@hooks/useStorageTask'
import { configToast } from '@utils/toast'
import { TaskData } from '@dtos/task'

import { AnimateCheck } from '@components/AnimateCheck'

import CrossIcon from '@assets/icon-cross.svg'

import { CheckButton, Container, ButtonDelete } from './styles'

interface Props {
  taskId: number
}

export const CardTask: React.FC<Props> = ({ taskId }) => {
  const [task, setTask] = useState<TaskData>()

  const { data, refreshTasksData, deleteTask } = useStorageTask()
  const { openModalAlert } = useModalAlert()

  const notifyCompleted = () => configToast({
    type: 'success',
    message: '🎉 Parabéns sua tarefa foi concluída!!'
  })

  const notifyActive = () => configToast({
    type: 'info',
    message: 'Sua tarefa está ativa novamente.'
  })

  useEffect(() => {
    if (data) {
      const filter = data.filter(item => item.id === taskId)
      setTask(filter[0])
    }
  }, [data])

  function handleChecked() {
    if (task?.status === 'completed') {
      const test = data.map((item: TaskData) => {
        if (item.id === taskId) {
          return {
            id: item.id,
            task: item.task,
            status: 'active'
          }
        } else {
          return item
        }
      })
      localStorage.setItem('@todoList', JSON.stringify(test))
      notifyActive()
    }

    if (task?.status === 'active') {
      const test = data.map((item: TaskData) => {
        if (item.id === taskId) {
          return {
            id: item.id,
            task: item.task,
            status: 'completed'
          }
        } else {
          return item
        }
      })
      localStorage.setItem('@todoList', JSON.stringify(test))
      notifyCompleted()
    }
    refreshTasksData()
  }

  function deleteTasksSelected(taskId: number) {
    const task = data.filter(item => item.id === taskId)

    if (task[0].status === 'active') {
      openModalAlert({
        title: 'Deseja excluir a tarefa antes de conclui-la?',
        description: 'Ao confirmar a tarefa não estará mais disponível.',
        buttonConfirm: 'Sim, desejo excluir.',
        buttonCancel: 'Não',
        onRequestConfirm: () => deleteTask(taskId)
      })
    }

    if (task[0].status === 'completed') {
      openModalAlert({
        title: 'Deseja excluir a tarefa?',
        description: 'Ao confirmar a tarefa não estará mais disponível.',
        buttonConfirm: 'Sim, desejo excluir.',
        buttonCancel: 'Não',
        onRequestConfirm: () => deleteTask(taskId)
      })
    }

  }

  return (
    <Container check={task?.status === 'completed'}>
      <CheckButton
        check={task?.status === 'completed'}
        onClick={handleChecked}
      >
        {task?.status === 'completed' && (
          <AnimateCheck />
        )}
      </CheckButton>
      <h1>{task?.task}</h1>
      <ButtonDelete
        onClick={() => deleteTasksSelected(task!.id)}
      >
        <img src={CrossIcon} alt="" />
      </ButtonDelete>
    </Container>
  )
}