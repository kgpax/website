import useWebsiteContext from '~/hooks/useWebsiteContext'
import { BlogPrevNext } from '~/types/blog'
import { tw } from '~/utils/tailwind'
import Link from './Link'

type PrevNextNavProps = React.HTMLAttributes<HTMLElement> & BlogPrevNext

export default function PrevNextNav({
  prev,
  next,
  className,
  ...props
}: PrevNextNavProps) {
  const { posts } = useWebsiteContext()

  if (!prev && !next) return null

  const prevPage = prev ? posts.find(x => x.fullPath.endsWith(prev)) : undefined
  const nextPage = next ? posts.find(x => x.fullPath.endsWith(next)) : undefined

  const linkClasses =
    'list-none m-0 p-0 opacity-50 hover:opacity-100 transition-opacity'
  return (
    <nav className={tw('mt-12', className)} {...props}>
      <ul className="flex flex-row justify-center gap-4 m-0 p-0">
        <li key="prev" className={tw(linkClasses, 'flex-1 text-right')}>
          {prevPage && (
            <>
              &larr;{' '}
              <Link href={prevPage.fullPath} className="font-normal">
                {prevPage.shortTitle || prevPage.title}
              </Link>
            </>
          )}
        </li>
        <li className={tw(linkClasses, 'flex-none')}>|</li>
        <li key="next" className={tw(linkClasses, 'flex-1 text-left')}>
          {nextPage && (
            <>
              <Link href={nextPage.fullPath} className="font-normal">
                {nextPage.shortTitle || nextPage.title}
              </Link>{' '}
              &rarr;
            </>
          )}
        </li>
      </ul>
    </nav>
  )
}
