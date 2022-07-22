import { BlogSeriesEntry } from '~/types/blog'

export function getBlogPostSeries(
  series: BlogSeriesEntry[],
  id: string,
): BlogSeriesEntry | null {
  return series.find(x => x.posts.some(y => y.id === id)) ?? null
}
