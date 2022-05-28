import { BlogMetadata } from '~/types/blog'
import Date from './Date'
import Link from './Link'
import Page from './Page'

export type BlogPageProps = React.HTMLAttributes<HTMLElement> & BlogMetadata

export default function BlogPage({ title, date, children }: BlogPageProps) {
  return (
    <Page className="max-w-xl">
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
        <h1>{title}</h1>
        <Date>{date}</Date>
      </header>
      <div className="blog-post">{children}</div>
    </Page>
  )
}
