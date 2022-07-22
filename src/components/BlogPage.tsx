import useWebsiteContext from '~/hooks/useWebsiteContext'
import { BlogData } from '~/types/blog'
import { getBlogPostSeries } from '~/utils/blog'
import { tw } from '~/utils/tailwind'
import BlogSeries from './BlogSeries'
import DateDisplay from './DateDisplay'
import Link from './Link'
import Page from './Page'
import PrevNextNav from './PrevNextNav'

type BlogPageProps = React.HTMLAttributes<HTMLElement> & BlogData

type SideBarProps = React.HTMLAttributes<HTMLElement> & {
  side: 'left' | 'right'
}

function SideBar({ side, children }: SideBarProps) {
  return (
    <div
      className={tw(
        'flex-1 py-6 sticky top-0 hidden xl:block',
        side === 'left' && 'pr-12',
        side === 'right' && 'pl-12',
      )}
    >
      {children}
    </div>
  )
}

export default function BlogPage({ id, title, date, children }: BlogPageProps) {
  const { posts, series } = useWebsiteContext()
  const post = posts.find(post => post.id === id)
  const postSeries = getBlogPostSeries(series, id)

  const idx = postSeries?.posts.findIndex(post => post.id === id) ?? null
  const count = postSeries?.posts.length ?? 1

  const prev =
    idx !== null && idx > 0 ? postSeries?.posts[idx - 1] ?? null : null
  const next =
    idx !== null && idx < count - 1 ? postSeries?.posts[idx + 1] ?? null : null

  return (
    <Page>
      <div className="flex">
        <SideBar side="left" />
        <div className="max-w-lg md:max-w-xl mx-auto">
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
            {postSeries ? (
              <>
                <h1 className="font-sans mt-12 mb-0 text-xl opacity-70">
                  {postSeries.title}
                </h1>
                <h2 className="font-sans mt-0">{title}</h2>
              </>
            ) : (
              <h1 className="font-sans">{title}</h1>
            )}
            <DateDisplay className="opacity-70">{date}</DateDisplay>
          </header>
          <div className="blog-post">{children}</div>
          <PrevNextNav prev={prev} next={next} />
        </div>
        <SideBar side="right">
          {postSeries && post && (
            <BlogSeries series={postSeries} current={post} />
          )}
        </SideBar>
      </div>
    </Page>
  )
}
