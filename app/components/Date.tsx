import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

type DateProps = React.HTMLAttributes<HTMLElement> & {
  children?: string
}

export default function Date({ children }: DateProps) {
  const formattedDate = children
    ? dayjs(children).format('Do MMM YYYY')
    : undefined
  return children ? (
    <time dateTime={children} className="opacity-70">
      - {formattedDate} -
    </time>
  ) : (
    <>Publish date TBC</>
  )
}
