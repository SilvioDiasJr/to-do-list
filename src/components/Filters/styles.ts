import styled, { css } from 'styled-components'

interface Props {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 550px) {
    position: absolute;
    left: 0;
    bottom: -5rem;

    width: 100%;

    display: flex;
    justify-content: center;
    gap: 1.5rem;
    
    padding: 1rem;

    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px 1px;

    background-color: ${({ theme }) => theme.colors.card_background};
  }
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
      color: ${({ theme }) => theme.colors.text};
    `}
  }
`