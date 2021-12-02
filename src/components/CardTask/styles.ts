import styled, { css } from 'styled-components'

interface Props {
  check: boolean
}

export const Container = styled.div<Props>`
  width: 100%;
  min-height: 4.5rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  border-radius: 10px 10px 0 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.background};

  transition: all 0.3s;

  h1 {
    flex: 1;
    text-align: start;
    
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fonts.regular};

    ${({ check }) => check && css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.placeholder};
    `}
  }
`

export const CheckButton = styled.button<Props>`
  width: 1.8rem;
  height: 1.8rem;
  
  margin-right: 1rem;

  border-radius: 50%; 
  border: 1px solid ${({ theme }) => theme.colors.circle};

  cursor: pointer;

  background: transparent;

  ${({ check }) => check && css`
    border: 0;
    width: 2.8rem;
    height: 2.8rem;

    margin-left: -0.5rem;
    margin-right: 0.5rem;
  `}
`

export const ButtonDelete = styled.button`
  padding-left: 1rem;
  img {
    width: 1rem;
    height: 1rem;
  }
`