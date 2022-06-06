type EmojiProps = React.HTMLAttributes<HTMLElement> & {
  alt: string
}

export default function Emoji({ alt, children }: EmojiProps) {
  return (
    <span
      role="img"
      arial-label={alt}
      className="inline-block text-3xl -mt-4 translate-y-1 leading-none "
    >
      {children}
    </span>
  )
}
