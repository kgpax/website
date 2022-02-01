import { render } from '../../test/utils';
import Home from './Home';

const page = () => render(<Home />);

test('should match snapshot', () => {
  expect(page().element).toMatchSnapshot();
});
