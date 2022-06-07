import { render as rtlRender } from '@testing-library/react'
import { JSXElementConstructor, ReactElement } from 'react'

type ReactComponentType = ReactElement<any, string | JSXElementConstructor<any>>

const AllTheProviders = ({
  children,
}: {
  children: ReactComponentType
}): ReactComponentType => <>{children}</>

export const render = (children: ReactComponentType) => {
  if (!children) return null
  const rtlResult = rtlRender(children, { wrapper: AllTheProviders })
  return {
    ...rtlResult,
    element: rtlResult.container.firstChild,
  }
}
