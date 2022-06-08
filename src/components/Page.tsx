import useWebsiteContext from '~/hooks/useWebsiteContext'
import { tw } from '~/utils/tailwind'
import Link from './Link'
import Waves from './Waves'

type PageProps = React.HTMLAttributes<HTMLElement>

export default function Page({ className, children }: PageProps) {
  const { colors, copyrightYear } = useWebsiteContext()
  const [color1, color2] = colors
  const wavesHeight = 320
  const halfWavesHeight = wavesHeight / 2

  return (
    <div
      className="relative overflow-hidden min-h-screen min-w-[390px] p-8"
      style={{
        background: `linear-gradient(180deg, ${color1} calc(50% + ${halfWavesHeight}px), ${color2} calc(50% + ${halfWavesHeight}px))`,
      }}
    >
      <Waves
        color={color2}
        className="absolute left-1/2 -translate-x-1/2 z-0"
        style={{
          top: `calc(50% - ${halfWavesHeight}px)`,
          height: `${wavesHeight}px`,
        }}
      />
      <div className={tw('relative z-10 mx-auto', className)}>{children}</div>
      <footer className="group relative z-10 flex-none text-xs text-center py-8 md:py-10">
        <span className="opacity-50">&copy; {copyrightYear}</span>{' '}
        <Link
          href="/"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          Kevin Paxton
        </Link>
      </footer>
    </div>
  )
}
