type HeadingProps = React.HTMLAttributes<HTMLElement> & {}

export default function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>
}
