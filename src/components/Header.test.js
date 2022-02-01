import { render } from '../../test/utils';
import Header from './Header';

const component = (props = {}) =>
  render(<Header {...props}>This is some content</Header>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a HEADER element', () => {
  const { element } = component();
  expect(element.tagName).toBe('HEADER');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is some content');
});
