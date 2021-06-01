// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

Object.defineProperty(global.window, 'scrollTo', { value: jest.fn() });
Object.defineProperty(global.document, 'querySelector', { value: jest.fn() });

let oldWindow, oldDocument;

beforeEach(() => {
  oldWindow = global.window;
  oldDocument = global.document;
});

afterEach(() => {
  global.window = oldWindow;
  global.document = oldDocument;
});

jest.mock('./utils/colors', () => ({
  pickColorPair: () => ['#FFFFFF', '#FFFFFF'],
}));
