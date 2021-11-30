import React, { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { StorageContext } from '@contexts/StorageContext'
import { configToast } from '@utils/toast'

import { Input } from '@components/Form/Input'
import { Toast } from '@components/Toast'
import { ListTask } from '@components/ListTask'

import sunIcon from '@assets/icon-sun.svg'

import {
  Container,
  Content,
  Header,
  Title,
  Wrapper
} from './styles'

interface Data {
  newTask: string
}

export const Home: React.FC = () => {
  const { registerTasks } = useContext(StorageContext)

  const { register, handleSubmit, reset } = useForm<Data>()

  const notify = () => configToast({
    type: 'success',
    message: 'Sua tarefa foi adicionada com sucesso!!'
  })

  const handleRegisterTask: SubmitHandler<Data> = (value) => {
    registerTasks(value.newTask)
    notify()
    reset()
  }
  return (
    <Container>
      <Toast />
      <Wrapper>
        <Header>
          <Title>
            <h1>TAREFAS</h1>
            <button>
              <img src={sunIcon} alt="" />
            </button>
          </Title>

          <form onSubmit={handleSubmit(handleRegisterTask)}>
            <Input
              type='text'
              {...register('newTask')}
            />
            <button type="submit"></button>
          </form>
        </Header>

        <Content>
          <ListTask />
        </Content>
      </Wrapper>
    </Container>
  )
}