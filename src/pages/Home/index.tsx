import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useStorageTask } from '@hooks/useStorageTask'
import { configToast } from '@utils/toast'

import { Input } from '@components/Form/Input'
import { Toast } from '@components/Toast'
import { ListTask } from '@components/ListTask'

import sunIcon from '@assets/icon-sun.svg'
import moonIcon from '@assets/icon-moon.svg'

import {
  Container,
  Content,
  Header,
  Title,
  Wrapper
} from './styles'
import { ModalAlert } from '@components/ModalAlert'

interface Data {
  newTask: string
}

interface Props {
  handleTheme: Dispatch<SetStateAction<string>>
}

export const Home: React.FC<Props> = ({ handleTheme }) => {
  const [typeTheme, setTypeTheme] = useState<string>()
  const { data, registerTasks } = useStorageTask()

  useEffect(() => {
    const theme = localStorage.getItem('@todoList-theme')
    if (theme) {
      handleTheme(theme)
      setTypeTheme(theme)
    } else {
      setTypeTheme('light')
    }
  }, [])

  const { register, handleSubmit, reset } = useForm<Data>()

  const notify = () => configToast({
    type: 'success',
    message: 'Sua tarefa foi adicionada com sucesso!!'
  })

  const handleRegisterTask: SubmitHandler<Data> = (value) => {
    if (value.newTask !== '') {
      registerTasks(value.newTask)
      notify()
      reset()
    }
  }

  function changeTheme(theme: string) {
    setTypeTheme(theme)
    handleTheme(theme)
    localStorage.setItem('@todoList-theme', theme)
  }

  return (
    <Container >
      <Toast />
      <ModalAlert />
      <Wrapper>
        <Header>
          <Title>
            <h1>TAREFAS</h1>
            {typeTheme === 'light' && (
              <button onClick={() => changeTheme('dark')}>
                <img src={moonIcon} alt="" />
              </button>
            )}

            {typeTheme === 'dark' && (
              <button onClick={() => changeTheme('light')}>
                <img src={sunIcon} alt="" />
              </button>
            )}
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
          {data.length >= 1
            ? <ListTask />
            : <p>Você não tem tarefa cadastrada no momento.</p>
          }
        </Content>
      </Wrapper>
    </Container>
  )
}