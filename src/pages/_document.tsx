import Document, { Head, Html, Main, NextScript } from 'next/document'
import 'regenerator-runtime'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="min-h-screen">
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
          <link rel="stylesheet" href="/styles/main.css" />
        </Head>
        <body className="flex flex-col text-black min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
