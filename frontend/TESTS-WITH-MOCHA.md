## Tests with Mocha

Mocha is a flexible testing framework for JavaScript, running on Node.js and in the browser. It makes asynchronous testing simple, with support for promises, generators, and async/await. Use this cheat sheet to quickly reference how to set up and write tests using Mocha.

### Installation

First, install Mocha as a development dependency in your project:

```bash
npm install mocha --save-dev
```

Optionally, install Chai for assertion, if needed:

```bash
npm install chai --save-dev
```

### Basic Setup

Create a test directory in your project, commonly named `test`, and add your test files there. By default, Mocha looks for tests in `test/`.

#### Example Structure

```
project/
│
├── test/
│   └── exampleTest.js
└── src/
    └── exampleModule.js
```

### Writing Tests

A basic test file using Mocha and Chai might look like this:

```javascript
// Import assert module from Chai for assertions
const assert = require('chai').assert;
const exampleModule = require('../src/exampleModule');

// Describe block for grouping tests of exampleModule
describe('exampleModule', function() {
    // Individual test using "it"
    it('should return true', function() {
        let result = exampleModule.someFunction();
        assert.isTrue(result);
    });
});
```

### Running Tests

To run your tests, add a test script in your `package.json` file:

```json
"scripts": {
    "test": "mocha"
}
```

Then, execute your tests using npm:

```bash
npm test
```

### Asynchronous Testing

Mocha supports several patterns for testing asynchronous code:

#### Callbacks

Use the `done` callback provided by Mocha for testing asynchronous functions:

```javascript
it('should complete this async test', function(done) {
    setTimeout(function() {
        assert.ok(true);
        done(); // call done when the async task is complete
    }, 500);
});
```

#### Promises

Return a promise from your test:

```javascript
it('should work with promises', function() {
    return someFunctionThatReturnsAPromise()
        .then(result => assert.isTrue(result));
});
```

#### Async/Await

Use async/await for cleaner asynchronous tests:

```javascript
it('should work with async/await', async function() {
    let result = await someAsyncFunction();
    assert.isTrue(result);
});
```

### Hooks

Mocha provides hooks like `before()`, `after()`, `beforeEach()`, and `afterEach()` for setup and teardown operations:

```javascript
describe('exampleModule', function() {
    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});
```

### Timeout Control

Control the timeout for tests, which is useful for longer asynchronous operations:

```javascript
it('should complete eventually', function(done) {
    this.timeout(5000); // sets timeout to 5000 ms
    setTimeout(done, 3000);
});
```

### Skipping Tests

Skip specific tests or describe blocks using `it.skip()` or `describe.skip()`:

```javascript
it.skip('should skip this test', function() {
    // Test body
});
```

### Only Running Specific Tests

Focus on specific tests using `it.only()` or `describe.only()`:

```javascript
it.only('will only run this test', function() {
    // Test body
});
```