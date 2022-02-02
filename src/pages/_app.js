import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Theme from '@components/Theme';

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
  html, body, #root {
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
  #root {
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

const Application = ({ Component, pageProps }) => (
  <React.StrictMode>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Personal website of Kevin Paxton" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favico/favico.svg" />
      <link rel="alternate icon" href="/favico/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Recursive:wght@300;400;700&family=Shanti&family=Cousine&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Theme>
  </React.StrictMode>
);

export default Application;
