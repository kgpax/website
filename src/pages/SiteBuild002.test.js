import { performSnapshotTest } from '../../test/utils';
import SiteBuild002 from './SiteBuild002';

test('should match snapshot', () => {
  performSnapshotTest(<SiteBuild002 />);
});
