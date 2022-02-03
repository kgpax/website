import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 10px;
    @media only screen and (max-width: 768px) {
      font-size: 8px;
    }
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: 'Recursive', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  }
  #__next {
    font-size: 2rem;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    line-height: 1em;
  }
  body {
    color: #131317;
  }
  p, div, span, li {
    line-height: 1.9em;
    margin: 0;
  }
  li {
    margin-bottom: 1em;
    list-style-type: square;
  }
  button, textarea, select {
    font: inherit;
  }
`;

export default GlobalStyles;
