import { Date, Image, InfoBlock, Link, Page } from '~/components'
import useWebsiteContext from '~/hooks/useWebsiteContext'
import { WavingHand } from '~/icons'

const timeWorkingInSoftware = new global.Date().getFullYear() - 2004

export default function Index() {
  const { posts } = useWebsiteContext()
  return (
    <Page>
      <header className="flex-none text-center md:mb-20">
        <h1 className="flex flex-row justify-center items-center text-title font-title font-normal mb-2 md:mb-4">
          <Image
            src="logo.svg"
            alt="kevinpaxton.com logo"
            className="h-logo mr-2 md:mr-6"
          />
          kevinpaxton.com
        </h1>
        <h2 className="text-subtitle font-normal mt-0">
          my little bit of the internet
        </h2>
      </header>

      <main className="flex-auto flex flex-col md:flex-row mx-auto md:gap-10 max-w-lg md:max-w-5xl">
        <div className="flex-[2]">
          <InfoBlock
            iconComponent={<WavingHand animate />}
            iconAlt="Waving hand"
            className="mb-4 md:max-w-full"
          >
            Hello, I'm{' '}
            <Link href="https://twitter.com/kevinpaxton82">Kevin</Link>. After
            working in software engineering and web development for{' '}
            {timeWorkingInSoftware} years, I've come to the conclusion that it's
            time I had a website.
          </InfoBlock>
          <p>
            In an attempt to get the creative juices flowing with what to put on
            this part of the cloud, I figured that I'd document the process of
            getting this site up and built to a level I'm happy with, which will
            be all its own challenge, but more on that later.
          </p>

          <p>
            This will be a huge brain dump of the technical and creative thought
            process, and will arrive in stages alongside the general updates to
            the site.
          </p>
        </div>
        <div className="flex-[1]">
          <ul className="m-0 p-0">
            {posts.map(({ title, date, fullPath: url }) => (
              <li key={url} className="list-none">
                <Link className="block no-underline" href={url}>
                  <InfoBlock className="w-full transition-transform ease-in-out hover:scale-105">
                    <div>{title}</div>
                    <Date className="opacity-70 text-xs">{date}</Date>
                  </InfoBlock>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Page>
  )
}
