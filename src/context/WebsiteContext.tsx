import { createContext } from 'react'
import { BlogMetadataAndUrl } from '~/types/blog'
import { pickColorPair } from '~/utils/colors'

type WebsiteContextProviderProps = React.HTMLAttributes<HTMLBaseElement> & {
  value: WebsiteContextData
}

export type WebsiteContextData = {
  colors: [string, string]
  copyrightYear: number
  posts: BlogMetadataAndUrl[]
}

export function getInitialWebsiteContext(): WebsiteContextData {
  return {
    colors: pickColorPair(),
    copyrightYear: new Date().getFullYear(),
    posts: [],
  }
}

export const WebsiteContext = createContext<WebsiteContextData>(
  getInitialWebsiteContext(),
)
