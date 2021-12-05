import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal'

export const Container = styled(ReactModal)`
  width: 92%;
  max-width: 31.25rem;
  min-height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: 0;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.card_background};
`

export const Wrapper = styled.div`
  width: 92%;
  min-height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 0.5rem
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};

    margin-top: 1rem;
  }

`

export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`

export const ButtonCancel = styled.button`
  flex: 1;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.placeholder};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.placeholder};
`

export const ButtonConfirm = styled(ButtonCancel)`
  color: ${({ theme }) => theme.colors.title_button_confirm};

  background-color: ${({ theme }) => theme.colors.placeholder};
`