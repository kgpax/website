import { performSnapshotTest } from '../../test/utils';
import SiteBuild003 from './SiteBuild003';

test('should match snapshot', () => {
  performSnapshotTest(<SiteBuild003 />);
});
