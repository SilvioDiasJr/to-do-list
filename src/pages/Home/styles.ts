import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 92%;
  max-width: 700px;
  height: 100%;
`

export const Header = styled.header`
  width: 100%;

  margin: 2rem 0 2rem;
`

export const Title = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title};
  }

  button {
    border: 0;

    cursor: pointer;

    background-color: transparent;
  }
`

export const Content = styled.div`
  width: 100%;
`

