import { BlogPostEntry } from '~/types/blog'
import { tw } from '~/utils/tailwind'
import Link from './Link'

type PrevNextNavProps = React.HTMLAttributes<HTMLElement> & {
  prev?: BlogPostEntry | null
  next?: BlogPostEntry | null
}

export default function PrevNextNav({
  prev = null,
  next = null,
  className,
  ...props
}: PrevNextNavProps) {
  if (!prev && !next) return null

  const linkClasses =
    'list-none m-0 p-0 opacity-50 hover:opacity-100 transition-opacity'
  return (
    <nav className={tw('mt-12', className)} {...props}>
      <ul className="flex flex-row justify-center gap-4 m-0 p-0">
        <li key="prev" className={tw(linkClasses, 'flex-1 text-right')}>
          {prev && (
            <>
              &larr;{' '}
              <Link href={prev.slug} className="font-normal">
                {prev.shortTitle || prev.title}
              </Link>
            </>
          )}
        </li>
        <li className={tw(linkClasses, 'flex-none')}>|</li>
        <li key="next" className={tw(linkClasses, 'flex-1 text-left')}>
          {next && (
            <>
              <Link href={next.slug} className="font-normal">
                {next.shortTitle || next.title}
              </Link>{' '}
              &rarr;
            </>
          )}
        </li>
      </ul>
    </nav>
  )
}
