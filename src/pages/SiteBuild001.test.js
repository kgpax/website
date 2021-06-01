import { performSnapshotTest } from '../../test/utils';
import SiteBuild001 from './SiteBuild001';

test('should match snapshot', () => {
  performSnapshotTest(<SiteBuild001 />);
});
