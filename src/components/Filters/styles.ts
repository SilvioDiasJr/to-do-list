import styled, { css } from 'styled-components'

interface Props {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`

export const Button = styled.button<Props>`
  border: 0;

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.circle};
  
  ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.filter_active};
  `}

  cursor: pointer;

  transition: all 0.3s;
  
  background-color: transparent;

  &:hover {
    ${({ active }) => !active && css`
      color: #ffffff;
    `}
  }
`