import { render } from '../../test/utils';
import LinkButton from './LinkButton';

const component = (props = {}) =>
  render(
    <LinkButton href="https://kevinpaxton.com" {...props}>
      This is a link which looks like a button
    </LinkButton>
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
  expect(element.textContent).toBe('This is a link which looks like a button');
});
