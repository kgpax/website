import { tw } from '~/utils/tailwind'

type CodeProps = React.HTMLAttributes<HTMLElement>

export default function Code({ children }: CodeProps) {
  return (
    <code
      className={tw(
        'inline-block py-1 px-2 rounded-md -translate-1',
        'font-mono text-xs font-semibold',
        'bg-white bg-opacity-30',
      )}
    >
      {children}
    </code>
  )
}
