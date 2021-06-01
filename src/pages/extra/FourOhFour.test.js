import { performSnapshotTest } from '../../../test/utils';
import FourOhFour from './FourOhFour';

test('should match snapshot', () => {
  performSnapshotTest(<FourOhFour />);
});
