import { render } from '../../test/utils';
import Heading from './Heading';

const component = (props = {}) =>
  render(<Heading {...props}>This is a heading</Heading>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a H2 element', () => {
  const { element } = component();
  expect(element.tagName).toBe('H2');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is a heading');
});
