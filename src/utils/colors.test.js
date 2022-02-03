import { pickColorPair } from '@utils/colors';

jest.unmock('@utils/colors');

describe('pickColorPair', () => {
  test('should return array', () => {
    const result = pickColorPair();
    expect(Array.isArray(result)).toBe(true);
  });

  test('should return two items', () => {
    const result = pickColorPair();
    expect(result.length).toBe(2);
  });
});
