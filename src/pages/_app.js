import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@contexts/theme';
import { pickColorPair } from '@utils/colors';
import GlobalStyles from '@theme/GlobalStyles';

const Application = ({ Component, pageProps, serverProps }) => {
  const [colorPair] = useState(serverProps.colorPair);
  return (
    <React.StrictMode>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider colorPair={colorPair}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default Application;

if (typeof window === 'undefined') {
  Application.getInitialProps = () => {
    return {
      serverProps: { colorPair: pickColorPair() },
    };
  };
}
