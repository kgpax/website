import { Image, Page } from '~/components'
import Home from '~/content/home.mdx'
import { components } from '~/utils/mdx'

export default function Index() {
  return (
    <Page>
      <header className="flex-none text-center">
        <h1 className="flex flex-row justify-center items-center text-title font-title font-normal mb-2 md:mb-4">
          <Image
            src="logo.svg"
            alt="kevinpaxton.com logo"
            className="h-logo mr-2 md:mr-6"
          />
          kevinpaxton.com
        </h1>
        <h2 className="text-subtitle font-normal">
          my little bit of the internet
        </h2>
      </header>
      <main className="flex-auto flex flex-col max-w-xl mx-auto">
        <Home components={components} />
      </main>
    </Page>
  )
}
