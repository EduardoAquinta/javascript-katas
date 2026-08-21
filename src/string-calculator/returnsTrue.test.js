const returnsTrue = require('./returnsTrue');

describe('add', () => {
  test('returns 0 when given an empty string', () => {
    expect(add("")).toBe("0");
  });
});
