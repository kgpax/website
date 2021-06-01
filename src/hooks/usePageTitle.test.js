import { renderHook } from '@testing-library/react-hooks';
import usePageTitle from './usePageTitle';

test('should set expected page title', () => {
  renderHook(() => usePageTitle('my page title'));
  expect(window.document.title).toBe('kevinpaxton.com - my page title');
});
