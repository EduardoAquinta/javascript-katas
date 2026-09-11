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
      ["1,2,3,4,5", "15"],
    ])('returns %s when given %s', (input, expected) => {
      expect(add(input)).toBe(expected);
    });
  });

  describe('can use comma or new line as the separator', () => {
    test.each([
      ["1\n2", "3"],
      ["1\n2\n3,4,5", "15"]
    ])('given "%s" returns "%s"', (input, expected) => {
      // Todo: Newlines hidden in test output
      expect(add(input)).toBe(expected);
    });
  });

  describe('returns an error when given adjacent separators', () => {
    // expect(add("175.2,\n35")).toBe("Number expected but '\n' found at position 6.");
    test.each([
      ["175.2,\n35", "Number expected but '\n' found at position 6."],
      ["175.2\n,35", "Number expected but ',' found at position 6."],
      ["175.2\n\n35", "Number expected but '\n' found at position 6."],
      ["175.2,,35", "Number expected but ',' found at position 6."],
    ])('given "%s" returns "%s"', (input, expected) => {
      expect(add(input)).toBe(expected);
    });
  });
});
