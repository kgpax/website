import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/default';

export const renderWithTheme = (Tree) =>
  render(<ThemeProvider theme={theme}>{Tree}</ThemeProvider>);
