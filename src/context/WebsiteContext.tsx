import { createContext } from 'react'
import { BlogEntry, BlogPostEntry, BlogSeriesEntry } from '~/types/blog'
import { pickColorPair } from '~/utils/colors'

export type WebsiteContextData = {
  colors: [string, string]
  copyrightYear: number
  entries: BlogEntry[]
  posts: BlogPostEntry[]
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
