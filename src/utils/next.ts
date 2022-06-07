import { GetStaticPropsResult } from 'next'

export function next404<T>(): GetStaticPropsResult<T> {
  return { notFound: true }
}
