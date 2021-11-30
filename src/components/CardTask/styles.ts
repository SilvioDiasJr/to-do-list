import styled, { css } from 'styled-components'

interface Props {
  check: boolean
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};

  transition: all 0.3s;

  background-color: ${({ theme }) => theme.colors.input_background};

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

  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-right: 1rem;

  border-radius: 50%; 
  border: 1px solid ${({ theme }) => theme.colors.circle};

  cursor: pointer;

  background: transparent;

  ${({ check }) => check && css`
    border: 0;
    
    background: #FC5C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `}

  img {
    width: 0.875rem;
    height: 0.875rem;
  }
`

export const ButtonDelete = styled.button`
  padding-left: 1rem;
  img {
    width: 1rem;
    height: 1rem;
  }
`