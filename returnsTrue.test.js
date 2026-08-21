const returnsTrue = require('./returnsTrue');

describe('returnsTrue function', () => {
  // Test 1: Passing Test
  test('returns boolean true when called', () => {
    expect(returnsTrue()).toBe(true);
  });

  // Test 2: Failing Test
  test('returns false (intentional failure for practice)', () => {
    expect(returnsTrue()).toBe(false);
  });
});
