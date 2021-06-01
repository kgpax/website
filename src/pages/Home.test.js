import { performSnapshotTest } from '../../test/utils';
import Home from './Home';

test.only('should match snapshot', () => {
  performSnapshotTest(<Home />);
});
