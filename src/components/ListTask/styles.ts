import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px 1px;

  background-color: ${({ theme }) => theme.colors.card_background};

  p {
    padding: 2rem 0;
    
    border-bottom: 3px solid ${({ theme }) => theme.colors.background};

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  > button {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
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
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.circle};
  }
`