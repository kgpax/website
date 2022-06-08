import { BlogMetadata } from '~/types/blog'
import Date from './Date'
import Link from './Link'
import Page from './Page'
import PrevNextNav from './PrevNextNav'

export type BlogPageProps = React.HTMLAttributes<HTMLElement> & BlogMetadata

export default function BlogPage({
  title,
  date,
  prev,
  next,
  children,
}: BlogPageProps) {
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
