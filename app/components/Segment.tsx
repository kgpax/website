import Heading from './Heading'

type SegmentProps = React.HTMLAttributes<HTMLElement> & {
  heading: string
}

export default function Segment({ heading, children }: SegmentProps) {
  return (
    <section className="mt-10">
      {heading && <Heading>{heading}</Heading>}
      {children}
    </section>
  )
}
