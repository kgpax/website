import { render } from '@test/utils';
import Title from '@components/Title';

const component = (props = {}) =>
  render(<Title {...props}>This is a title</Title>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a H1 element', () => {
  const { element } = component();
  expect(element.tagName).toBe('H1');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is a title');
});
