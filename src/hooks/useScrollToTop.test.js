import { renderHook } from '@testing-library/react-hooks';
import { when } from 'jest-when';
import useScrollToTop from './useScrollToTop';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.resetAllMocks();
});

describe('when path does not contain a hash', () => {
  beforeEach(() => {
    global.window.location.hash = '';
  });

  test('should scroll to top', () => {
    renderHook(() => useScrollToTop());
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});

describe('when path contains a hash', () => {
  beforeEach(() => {
    global.window.location.hash = '#with-a-hash';
  });

  test('should not scroll before 100ms', () => {
    const scrollIntoViewMock = jest.fn();
    when(document.querySelector)
      .calledWith('#with-a-hash')
      .mockReturnValue({ scrollIntoView: scrollIntoViewMock });

    renderHook(() => useScrollToTop());
    jest.advanceTimersByTime(99);

    expect(window.scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  test('should scroll to element position when element found after 100ms', () => {
    const scrollIntoViewMock = jest.fn();
    when(document.querySelector)
      .calledWith('#with-a-hash')
      .mockReturnValue({ scrollIntoView: scrollIntoViewMock });

    renderHook(() => useScrollToTop());
    jest.advanceTimersByTime(100);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'end',
    });
  });

  test('should scroll to top if element not found', () => {
    when(document.querySelector)
      .calledWith('#with-a-hash')
      .mockReturnValue(undefined);

    renderHook(() => useScrollToTop());
    jest.advanceTimersByTime(100);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
