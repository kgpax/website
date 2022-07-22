import { createContext } from 'react'
import { BlogData, BlogEntry, BlogSeriesEntry } from '~/types/blog'
import { pickColorPair } from '~/utils/colors'

export type WebsiteContextData = {
  colors: [string, string]
  copyrightYear: number
  entries: BlogEntry[]
  posts: BlogData[]
  series: BlogSeriesEntry[]
}

export function getInitialWebsiteContext(): WebsiteContextData {
  return {
    colors: pickColorPair(),
    copyrightYear: new Date().getFullYear(),
    entries: [],
    posts: [],
    series: [],
  }
}

export const WebsiteContext = createContext<WebsiteContextData>(
  getInitialWebsiteContext(),
)
