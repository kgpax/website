import Link from 'next/link'
import { BlogEntry, BlogPostEntry, BlogSeriesEntry } from '~/types/blog'
import { tw } from '~/utils/tailwind'
import DateDisplay from './DateDisplay'
import InfoBlock from './InfoBlock'

type BlogListProps = React.HTMLAttributes<HTMLElement> & {
  entries: BlogEntry[]
}

type BlogPostProps = React.HTMLAttributes<HTMLElement> & {
  post: BlogPostEntry
}

type BlogSeriesProps = React.HTMLAttributes<HTMLElement> & {
  series: BlogSeriesEntry
}

function BlogPost({ post }: BlogPostProps) {
  const { title, date, slug } = post
  return (
    <InfoBlock className="w-full">
      <Link className="block no-underline" href={slug}>
        <div>{title}</div>
        <DateDisplay className="opacity-70 text-xs">{date}</DateDisplay>
      </Link>
    </InfoBlock>
  )
}

function BlogSeries({ series }: BlogSeriesProps) {
  const { title, date, posts } = series
  return (
    <InfoBlock className="w-full">
      <div>{title}</div>
      <DateDisplay className="opacity-70 text-xs">{date}</DateDisplay>
      <ul>
        {posts.map(({ title, date, slug, isPublished }) => (
          <li key={slug}>
            <Link href={slug}>
              <a
                className={tw(
                  'block no-underline',
                  !isPublished && 'line-through',
                )}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </InfoBlock>
  )
}

export default function BlogList({ entries }: BlogListProps) {
  return (
    <ul className="m-0 p-0">
      {entries.map(entry => (
        <li key={entry.slug} className="list-none">
          {entry.type === 'post' && <BlogPost post={entry} />}
          {entry.type === 'series' && <BlogSeries series={entry} />}
        </li>
      ))}
    </ul>
  )
}
