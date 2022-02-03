import { render } from '@test/utils';
import Date from '@components/Date';

const component = (props = {}) =>
  render(<Date {...props}>27th August 2021</Date>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a TIME element', () => {
  const { element } = component();
  expect(element.tagName).toBe('TIME');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('27th August 2021');
});
