import { render } from '../../test/utils';
import SiteBuild001 from './SiteBuild001';

const page = () => render(<SiteBuild001 />);

test('should match snapshot', () => {
  expect(page().element).toMatchSnapshot();
});
