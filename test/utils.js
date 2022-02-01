import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/default';

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const render = (children) => {
  const rtlResult = rtlRender(children, { wrapper: AllTheProviders });
  return {
    ...rtlResult,
    element: rtlResult.container.firstChild,
  };
};
