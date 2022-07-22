import useWebsiteContext from '~/hooks/useWebsiteContext'
import { BlogData } from '~/types/blog'
import { getBlogPostSeries } from '~/utils/blog'
import Date from './Date'
import Link from './Link'
import Page from './Page'
import PrevNextNav from './PrevNextNav'

export type BlogPageProps = React.HTMLAttributes<HTMLElement> & BlogData

export default function BlogPage({ id, title, date, children }: BlogPageProps) {
  const { series } = useWebsiteContext()
  const postSeries = getBlogPostSeries(series, id)

  const idx = postSeries?.posts.findIndex(post => post.id === id) ?? null
  const count = postSeries?.posts.length ?? 1

  let prev = idx !== null && idx > 0 ? postSeries?.posts[idx - 1] ?? null : null
  let next =
    idx !== null && idx < count - 1 ? postSeries?.posts[idx + 1] ?? null : null

  return (
    <Page className="max-w-lg md:max-w-xl">
      <header className="text-center">
        <div className="font-title text-sm">
          <span className="pr-1 opacity-50">&uarr;</span>
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/"
          >
            kevinpaxton.com
          </Link>
        </div>
        <h1 className="font-sans">{title}</h1>
        <Date className="opacity-70">{date}</Date>
      </header>
      <div className="blog-post">{children}</div>
      <PrevNextNav prev={prev} next={next} />
    </Page>
  )
}
