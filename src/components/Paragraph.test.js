import { render } from '@test/utils';
import Paragraph from '@components/Paragraph';

const component = (props = {}) =>
  render(<Paragraph {...props}>This is some content</Paragraph>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a P element', () => {
  const { element } = component();
  expect(element.tagName).toBe('P');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is some content');
});
