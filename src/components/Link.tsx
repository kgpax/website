import NextLink from 'next/link'

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
    <NextLink href={href || '/'} {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
