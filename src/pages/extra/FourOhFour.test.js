import { render } from '../../../test/utils';
import FourOhFour from './FourOhFour';

const page = () => render(<FourOhFour />);

test('should match snapshot', () => {
  expect(page().element).toMatchSnapshot();
});
