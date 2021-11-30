import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    width: 100%;
  }
  
  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto;

    font-family: 'Roboto', sans-serif;

    background-color: ${({ theme }) => theme.colors.background};
  }

  a, button, input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;

    cursor: pointer;

    background-color: transparent;
  }

  @media (max-width: 1080px) {
    html { 
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html { 
      font-size: 87.5%;
    }
  }
`