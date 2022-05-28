import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'
import { pickColorPair } from '~/utils/colors'
import WebsiteContextProvider, {
  WebsiteContextData,
} from './context/WebsiteContext'

type LoaderData = {
  initialColors: [string, string]
  copyrightYear: number
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return {
    initialColors: pickColorPair(),
    copyrightYear: new Date().getFullYear(),
  }
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Clicker+Script&family=Recursive:wght@300;400;700&family=Shanti&family=Cousine&display=block',
  },
  { rel: 'stylesheet', href: '/styles/base.css' },
]

export default function App() {
  const { initialColors, copyrightYear } = useLoaderData<LoaderData>()

  const websiteContext: WebsiteContextData = {
    colors: initialColors,
    copyrightYear,
  }

  return (
    <html lang="en" className="min-h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favico/favico.svg" />
        <link rel="alternate icon" href="/favico/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col text-black min-h-screen">
        <WebsiteContextProvider value={websiteContext}>
          <Outlet />
        </WebsiteContextProvider>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV !== 'production' && <LiveReload />}
      </body>
    </html>
  )
}
