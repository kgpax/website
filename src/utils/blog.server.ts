import glob from 'fast-glob'
import {
  BlogData,
  BlogEntry,
  BlogSeriesEntry,
  EntryMetaData,
} from '~/types/blog'

export async function getBlogEntries(): Promise<BlogEntry[]> {
  const postPaths = await glob('src/pages/blog/**/*.mdx')

  const posts = await Promise.all(
    postPaths.map(async path => {
      const filePath = path.replace(/^src\/pages/, '')
      const fileName = path.split('/').reverse()[0].replace(/\.mdx/, '')
      const slug = filePath.replace(/\.mdx/, '')
      const series = filePath
        .substring(0, filePath.lastIndexOf('/'))
        .replace(/^\/blog\//, '')
      const { meta }: { meta: EntryMetaData } = await import(
        `../pages${filePath}`
      )

      return {
        ...meta,
        filePath,
        fileName,
        series,
        slug,
        isPublished: !!meta.date,
      } as BlogData
    }),
  )

  const sortedPosts = posts.sort((a, b) =>
    (a.date ?? '9999-99-99').localeCompare(b.date ?? '9999-99-99'),
  )

  const entries: BlogEntry[] = []

  for (const post of sortedPosts) {
    if (!post.series) {
      entries.push({
        type: 'post',
        ...post,
      })
    } else {
      if (post.series) {
        let series = entries.find(
          entry => entry.series === post.series,
        ) as BlogSeriesEntry
        if (!series) {
          series = {
            type: 'series',
            ...post,
            posts: [],
          }
          entries.push(series)
        }
        if (post.fileName !== '_meta') {
          series.posts.push({ type: 'post', ...post })
        }
      } else {
      }
    }
  }

  return entries
}
