export type EntryMetaData = {
  id: string
  title: string
  shortTitle?: string
  description?: string
  date?: string
  isPublished: boolean
}

export type PathData = {
  filePath: string
  fileName: string
  series: string
  slug: string
}

export type BlogData = EntryMetaData & PathData

export type BlogPostEntry = BlogData & {
  type: 'post'
}

export type BlogSeriesEntry = BlogData & {
  type: 'series'
  posts: BlogPostEntry[]
}

export type BlogEntry = BlogPostEntry | BlogSeriesEntry
