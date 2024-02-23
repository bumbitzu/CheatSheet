## Test-Driven Development with Mocha

Test-Driven Development (TDD) is a software development approach where tests are written before the code that needs to be implemented. The process follows a cycle of writing a test, making it pass, and then refactoring the code. Mocha, a flexible testing framework for JavaScript, is often used in TDD because of its simplicity and support for asynchronous testing. This cheat sheet provides guidance on implementing TDD with Mocha.

### TDD Cycle

1. **Write a Failing Test**: Start by writing a test that fails because the feature it tests doesn't exist yet.
2. **Make the Test Pass**: Write the minimal amount of code necessary to make the test pass.
3. **Refactor**: Clean up the new code, ensuring it integrates well with the existing codebase, without changing its behavior.

Repeat this cycle for each new feature or bug fix.

### Setting Up Mocha

1. **Install Mocha (and Chai for Assertions)**:
   ```bash
   npm install mocha chai --save-dev
   ```
2. **Configure Test Scripts** in `package.json`:
   ```json
   "scripts": {
       "test": "mocha"
   }
   ```
3. **Write Tests** in the `test/` directory. Mocha automatically finds and runs files in this directory.

### Writing Your First Test

1. **Create a Test File**: Inside the `test/` directory, e.g., `test/myFeature.test.js`.
2. **Import Assertions**: Use Chai's `expect` or `assert` for readable assertions.
   ```javascript
   const expect = require('chai').expect;
   ```
3. **Describe Your Test Suite**:
   ```javascript
   describe('MyFeature', function() {
       it('should perform some action', function() {
           expect(true).to.be.true; // Example assertion
       });
   });
   ```

### The Red-Green-Refactor Cycle

#### Red: Write a Failing Test

Define what you want to develop. Write a test that describes a function's expected behavior. Run the test (`npm test`), and see it fail.

#### Green: Make the Test Pass

Implement the function to make the test pass. The implementation should be as simple as possible.

#### Refactor: Clean Up

Refine the code without changing its behavior. Ensure all tests pass after refactoring.

### Example Cycle

#### 1. Write a Failing Test

```javascript
// test/calculator.test.js
const expect = require('chai').expect;
const calculator = require('../src/calculator');

describe('Calculator', function() {
    it('adds two numbers', function() {
        const result = calculator.add(1, 2);
        expect(result).to.equal(3);
    });
});
```

#### 2. Implement the Feature

```javascript
// src/calculator.js
exports.add = function(a, b) {
    return a + b; // Simple implementation to pass the test
};
```

#### 3. Run Tests

Run `npm test`. The test should pass, indicating that the `add` function works as expected.

#### 4. Refactor (If Necessary)

Refactor your code and tests to improve readability, performance, or maintainability, ensuring tests still pass.

### Best Practices in TDD with Mocha

- **Small Steps**: Write small tests and make small changes. This helps in isolating problems and understanding changes.
- **Descriptive Tests**: Use meaningful names for test cases and suites. They should describe the expected behavior.
- **Frequent Commits**: Commit your changes after each cycle. This provides a clear history of feature development.
- **Isolate Tests**: Each test should run independently and not depend on other tests' state or outcomes.
- **Continuous Integration**: Run your tests in a CI environment to ensure changes pass all tests before merging.

Implementing TDD with Mocha can significantly improve the quality and reliability of your code. By writing tests first, you ensure that your code meets all specified requirements and behaves as expected.