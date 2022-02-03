import { render } from '@test/utils';
import Content from '@components/Content';

const component = (props = {}) =>
  render(<Content {...props}>This is some content</Content>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be an ARTICLE element', () => {
  const { element } = component();
  expect(element.tagName).toBe('ARTICLE');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is some content');
});

test('should default to left text alignment', () => {
  const { element } = component();
  expect(element).toHaveStyle({ 'text-align': 'left' });
});

test('should allow text alignment to be set', () => {
  const { element } = component({ align: 'right' });
  expect(element).toHaveStyle({ 'text-align': 'right' });
});
