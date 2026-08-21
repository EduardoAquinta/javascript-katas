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

  test('returns 2 when given 1,1', () => {
    expect(add("1,1")).toBe("2");
  });

    test('returns 3.3 when given 1.1, 2.2', () => {
    expect(add("1.2,2.2")).toBe("3.3");
  });
});
