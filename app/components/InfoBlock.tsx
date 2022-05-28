import { tw } from '~/utils/tailwind'
import Image from './Image'

type InfoBlockPropsCommon = {
  bg?: 'black' | 'white'
}

type InfoBlockPropsWithImage = InfoBlockPropsCommon & {
  icon: string
  iconAlt: string
}

type InfoBlockPropsWithIcon = InfoBlockPropsCommon & {
  iconComponent: React.ReactNode
  iconAlt: string
}

type InfoBlockProps = React.HTMLAttributes<HTMLElement> &
  (InfoBlockPropsCommon | InfoBlockPropsWithImage | InfoBlockPropsWithIcon)

export default function InfoBlock({
  bg = 'black',
  className = '',
  children,
  ...props
}: InfoBlockProps) {
  const bgClasses =
    bg === 'black' ? 'bg-opacity-5 bg-black' : 'bg-opacity-20 bg-white'

  return (
    <aside
      className={tw(
        `flex flex-row items-start`,
        bgClasses,
        `rounded-2xl p-6 mx-auto`,
        `max-w-lg md:max-w-xl`,
        `child-image:flex-none child-image:w-12 child-image:mr-5`,
        className,
      )}
    >
      {'icon' in props && <Image src={props.icon} alt={props.iconAlt} />}
      {'iconComponent' in props && props.iconComponent}
      <span className="flex-auto">{children}</span>
    </aside>
  )
}
