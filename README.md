# JavaScript TDD Practice with Jest

Welcome! This repository is bootstrapped for practicing **Test-Driven Development (TDD)** in JavaScript using the **Jest** testing framework.

## Project Structure

- `add.js`: Contains the implementation of the `returnsTrue` function.
- `add.test.js`: Contains the test suite for `returnsTrue` with two unit tests (one passing, one intentionally failing).
- `package.json`: Project configuration and npm scripts.

---

## Getting Started & Running Tests

### 1. Run Tests Once
Execute the following command in your terminal to run all tests:

```bash
npm test
```

When you run `npm test`, Jest will execute all `.test.js` files. You will see output showing:
- 1 test **passed** (`returns boolean true when called`)
- 1 test **failed** (`returns false (intentional failure for practice)`)

### 2. Run Tests in Watch Mode (Recommended for TDD)
Jest provides a watch mode that re-runs tests automatically whenever you save changes to your code or test files:

```bash
npm run test:watch
```

---

## Practicing TDD (The Red-Green-Refactor Cycle)

TDD follows a simple 3-step cycle:

1. **Red**: Write a test for a new feature or behavior before writing the code. Run the test and verify that it fails.
2. **Green**: Write the minimal amount of code required to make the test pass.
3. **Refactor**: Clean up the code while keeping all tests passing.

### Next Steps for You:
1. Open [`add.test.js`](file:///Users/eddieashton/Desktop/Dave/tdd-practise/string-calculator/returnsTrue.test.js).
2. Examine the failing test. Fix or edit the expectation, or write a new test for a new function!
3. Add a new function in a new file (e.g. for a String Calculator kata) and follow the TDD process!
