import { MDXProvider } from '@mdx-js/react'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import React, { useRef } from 'react'
import { WebsiteContext, WebsiteContextData } from '~/context/WebsiteContext'
import { getPosts } from '~/utils/blog'
import { pickColorPair } from '~/utils/colors'
import { components } from '~/utils/mdx'

type ServerProps = AppProps & {
  websiteContext: WebsiteContextData
}

function Application({ Component, pageProps, websiteContext }: ServerProps) {
  const storedWebsiteContext = useRef(websiteContext)
  return (
    <React.StrictMode>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <WebsiteContext.Provider value={storedWebsiteContext.current}>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </WebsiteContext.Provider>
    </React.StrictMode>
  )
}

if (typeof window === 'undefined') {
  Application.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext)
    const colors = pickColorPair()
    const copyrightYear = new Date().getFullYear()
    const posts = await getPosts()

    return {
      ...appProps,
      websiteContext: {
        colors,
        copyrightYear,
        posts,
      },
    }
  }
}

export default Application
