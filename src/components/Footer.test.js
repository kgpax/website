import { render } from '@test/utils';
import Footer from '@components/Footer';

const component = (props = {}) =>
  render(<Footer {...props}>This is some footer content</Footer>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a FOOTER element', () => {
  const { element } = component();
  expect(element.tagName).toBe('FOOTER');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toMatch(/^This is some footer content/);
});

test('should contain copyright notice', () => {
  const { element } = component();
  expect(element.textContent).toMatch(/\u00A9 20\d{2} Kevin Paxton$/);
});
