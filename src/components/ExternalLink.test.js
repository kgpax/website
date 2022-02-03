import { render } from '@test/utils';
import ExternalLink from '@components/ExternalLink';

const component = (props = {}) =>
  render(
    <ExternalLink href="https://kevinpaxton.com" {...props}>
      This is an external link
    </ExternalLink>,
  );

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be an A element', () => {
  const { element } = component();
  expect(element.tagName).toBe('A');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is an external link');
});
