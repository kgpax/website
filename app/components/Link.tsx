import { Link as RemixLink } from '@remix-run/react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({
  href,
  children,
  className,
  ...props
}: LinkProps) {
  if (href?.startsWith('http'))
    return (
      <a
        href={href}
        rel="noopener nofollow noreferrer"
        target="_blank"
        className={className}
        {...props}
      >
        {children}
      </a>
    )

  return (
    <RemixLink to={href || '/'} {...props} className={className}>
      {children}
    </RemixLink>
  )
}
