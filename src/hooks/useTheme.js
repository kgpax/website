import { useContext } from 'react';
import ThemeContext from '@contexts/theme';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
