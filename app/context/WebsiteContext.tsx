import { useLocation } from '@remix-run/react'
import { createContext, useEffect, useRef } from 'react'
import { pickColorPair } from '~/utils/colors'

export type WebsiteContextData = {
  colors: [string, string]
  copyrightYear: number
}

export const WebsiteContext = createContext<WebsiteContextData>(
  {} as WebsiteContextData,
)

type WebsiteContextProviderProps = React.BaseHTMLAttributes<HTMLBaseElement> & {
  value: WebsiteContextData
}

export default function WebsiteContextProvider({
  value,
  children,
}: WebsiteContextProviderProps) {
  const colors = useRef<[string, string]>(value.colors)
  const { pathname } = useLocation()

  useEffect(() => {
    colors.current = pickColorPair()
  }, [pathname])

  const clientValue = {
    _colors: colors.current,
    get colors() {
      return this._colors
    },
    set colors(value) {
      this._colors = value
    },
    copyrightYear: value.copyrightYear,
  }
  return (
    <WebsiteContext.Provider value={clientValue}>
      {children}
    </WebsiteContext.Provider>
  )
}
