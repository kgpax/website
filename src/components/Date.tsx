import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

type DateProps = React.HTMLAttributes<HTMLElement> & {
  children?: string
}

export default function Date({ children, ...props }: DateProps) {
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
