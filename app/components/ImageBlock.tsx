import { tw } from '~/utils/tailwind'

type ImageBlockProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  caption?: string
  width?: string
}

export default function ImageBlock({
  src,
  alt,
  caption,
  width = '100%',
}: ImageBlockProps) {
  const widthClasses = `max-w-[80%]`
  return (
    <div className={tw(widthClasses, 'my-6 mx-auto')} style={{ width }}>
      <img
        className="block border-[3px] border-[#232323] rounded-lg"
        src={src}
        alt={alt ?? caption}
      />
      <figure className="p-0 m-0">
        {caption && (
          <figcaption className="text-xs leading-8 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  )
}
