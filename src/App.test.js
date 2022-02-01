import { screen } from '@testing-library/react';
import { render } from '../test/utils';
import App from './App';

test('should render the homepage by default', () => {
  render(<App />);
  const linkElement = screen.getByText('kevinpaxton.com');
  expect(linkElement).toBeInTheDocument();
});
