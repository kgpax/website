import { useContext } from 'react'
import { WebsiteContext } from '~/context/WebsiteContext'

export default function useWebsiteContext() {
  return useContext(WebsiteContext)
}
