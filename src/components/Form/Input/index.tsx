import React, { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  type,
  ...rest
}, ref) => {

  return (
    <Container>
      <div></div>
      <input
        name={name}
        type={type}
        ref={ref}
        placeholder='Digite uma tarefa e pressione enter'
        {...rest}
      />
    </Container>
  )
}

export const Input = forwardRef(InputBase)
