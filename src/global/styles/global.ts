import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    max-width: 700px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto;

    font-family: 'DM Sans', sans-serif;

    background-color: #ffff;
  }

  a, button, input, textarea {
    font-family: 'DM Sans', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
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