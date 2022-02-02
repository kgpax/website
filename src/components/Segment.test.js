import { render } from '../../test/utils';
import Segment from './Segment';

const component = (props = {}) =>
  render(<Segment {...props}>This is some content</Segment>);

test('should be a SECTION element', () => {
  const { element } = component();
  expect(element.tagName).toBe('SECTION');
});

test('should contain expected content', () => {
  const { element } = component();
  expect(element.textContent).toBe('This is some content');
});

describe('with heading', () => {
  test('should match snapshot', () => {
    expect(component({ heading: 'My heading' }).element).toMatchSnapshot();
  });

  test('should include heading element', () => {
    const { element, getByText } = component({ heading: 'My heading' });

    const heading = getByText('My heading');
    expect(heading).toBeInTheDocument();

    const h2element = element.querySelector('h2');
    expect(h2element).toBe(heading);
  });

  test('should add id attribute to element', () => {
    const { element } = component({ heading: 'My heading' });
    expect(element).toHaveAttribute('id', 'my-heading');
  });
});

describe('without heading', () => {
  test('should match snapshot', () => {
    expect(component().element).toMatchSnapshot();
  });

  test('should not include heading element', () => {
    const { element } = component();
    const h2element = element.querySelector('h2');
    expect(h2element).toBe(null);
  });
});
