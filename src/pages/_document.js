import 'regenerator-runtime';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Personal website of Kevin Paxton" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favico/favico.svg" />
          <link rel="alternate icon" href="/favico/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/*eslint-disable-next-line @next/next/google-font-display */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Recursive:wght@300;400;700&family=Shanti&family=Cousine&display=block"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
