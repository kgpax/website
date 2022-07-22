import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

type DateDisplayProps = React.HTMLAttributes<HTMLElement> & {
  children?: string
}

export default function DateDisplay({ children, ...props }: DateDisplayProps) {
  const formattedDate = children
    ? dayjs(children).format('Do MMM YYYY')
    : undefined
  return children ? (
    <time dateTime={children} {...props}>
      {formattedDate}
    </time>
  ) : (
    <span {...props}>Publish date TBC</span>
  )
}
