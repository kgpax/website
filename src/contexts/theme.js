import { createContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from '@theme/default';

const ThemeContext = createContext({});

export const ThemeProvider = ({ colorPair, children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <ThemeContext.Provider value={{ theme, colorPair }}>
      {children}
    </ThemeContext.Provider>
  </StyledComponentsThemeProvider>
);

export default ThemeContext;
