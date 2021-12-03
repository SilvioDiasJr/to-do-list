import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px 1px;

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
      color: ${({ theme }) => theme.colors.text};
    }
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.circle};
  }
`