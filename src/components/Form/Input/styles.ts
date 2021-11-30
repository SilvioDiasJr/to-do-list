import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.input_background};

  div {
    width: 1.8rem;
    height: 1.8rem;
    
    margin: 1rem;

    border: 1px solid ${({ theme }) => theme.colors.circle};
    border-radius: 50%;
  }

  input[type='text'] {
    flex: 1;
    margin-right: 1rem;
    height: 100%;

    border: 0;
    outline: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fonts.regular};

    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`