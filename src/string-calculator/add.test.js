const add = require('./add');

describe('add', () => {
  test('returns 0 when given an empty string', () => {
    expect(add("")).toBe("0");
  });

  describe('returns sum of comma separated numbers', () => {
    test.each([
      ["1", "1"],
      ["5", "5"],
      ["1,1", "2"],
      ["1.1,2.2", "3.3"],
    ])('returns %s when given %s', (input, expected) => {
      expect(add(input)).toBe(expected);
    });
  });
});
