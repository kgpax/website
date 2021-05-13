import { screen } from '@testing-library/react';
import { renderWithTheme } from '../test/utils';
import App from './App';

test('renders title', () => {
  renderWithTheme(<App />);
  const linkElement = screen.getByText('kevinpaxton.com');
  expect(linkElement).toBeInTheDocument();
});
