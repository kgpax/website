import Link from 'next/link'
import { BlogPostEntry, BlogSeriesEntry } from '~/types/blog'
import { tw } from '~/utils/tailwind'

type BlogSeriesProps = React.HTMLAttributes<HTMLElement> & {
  series: BlogSeriesEntry
  current: BlogPostEntry
}

export default function BlogSeries({ series, current }: BlogSeriesProps) {
  return (
    <>
      <div>
        <span className="font-bold">Posts in this series:</span>
      </div>
      <ul className="m-0 pl-5">
        {series.posts.map(({ id, slug, title }) => (
          <li
            key={slug}
            className={tw(
              'my-1 py-0 text-xs',
              id === current.id && 'font-bold',
            )}
          >
            <Link href={slug}>
              <a className="no-underline">{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
