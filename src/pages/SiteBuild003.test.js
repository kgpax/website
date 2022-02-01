import { render } from '../../test/utils';
import SiteBuild003 from './SiteBuild003';

const page = () => render(<SiteBuild003 />);

test('should match snapshot', () => {
  expect(page().element).toMatchSnapshot();
});
