import { MDXProvider } from '@mdx-js/react'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import React, { useRef } from 'react'
import { WebsiteContext, WebsiteContextData } from '~/context/WebsiteContext'

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
    const { getBlogEntries } = await import('~/utils/blog.server')
    const entries = await getBlogEntries()

    return {
      ...appProps,
      websiteContext: {
        colors,
        copyrightYear,
        entries,
        posts: entries.flatMap(x =>
          x.type === 'post' ? x : x.type === 'series' ? x.posts : [],
        ),
        series: entries.filter(x => x.type === 'series'),
      },
    }
  }
}

export default Application
