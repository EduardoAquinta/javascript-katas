const add = require('./add');

describe('add', () => {
  test('returns 0 when given an empty string', () => {
    expect(add("")).toBe("0");
  });

  test('returns 1 when given 1', () => {
    expect(add("1")).toBe("1");
  });
  
  test('returns 5 when given 5', () => {
    expect(add("5")).toBe("5");
  });

  test('returns 5 when given 5', () => {
    expect(add("1,1")).toBe("2");
  });
});
