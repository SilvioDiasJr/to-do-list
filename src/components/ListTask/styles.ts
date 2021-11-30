import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.card_background};
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  > button {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.circle};

    border: 0;

    cursor: pointer;

    transition: all 0.3s;
  
    background-color: transparent;

    &:hover {
      color: #ffffff;
    }
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.circle};
  }
`