import { BlogMetadataAndUrl } from '~/types/blog'
import { tw } from '~/utils/tailwind'
import Link from './Link'

type PrevNextNavProps = React.HTMLAttributes<HTMLElement> & {
  prev?: BlogMetadataAndUrl
  next?: BlogMetadataAndUrl
}

export default function PrevNextNav({
  prev,
  next,
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
              <Link href={prev.url} className="font-normal">
                {prev.shortTitle || prev.title}
              </Link>
            </>
          )}
        </li>
        <li className={tw(linkClasses, 'flex-none')}>|</li>
        <li key="next" className={tw(linkClasses, 'flex-1 text-left')}>
          {next && (
            <>
              <Link href={next.url} className="font-normal">
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
