import { render } from '../../test/utils';
import Code from './Code';

const component = (props = {}) => render(<Code {...props}>const x = 1;</Code>);

test('should match snapshot', () => {
  expect(component().element).toMatchSnapshot();
});

test('should be a CODE element', () => {
  const { element } = component();
  expect(element.tagName).toBe('CODE');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('const x = 1;');
});
