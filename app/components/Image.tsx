type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

export default function Image({ src, alt, ...props }: ImageProps) {
  return <img src={`/img/${src}`} alt={alt} {...props} />
}
