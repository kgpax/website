import { render } from '../../test/utils';
import SiteBuild002 from './SiteBuild002';

const page = () => render(<SiteBuild002 />);

test('should match snapshot', () => {
  expect(page().element).toMatchSnapshot();
});
