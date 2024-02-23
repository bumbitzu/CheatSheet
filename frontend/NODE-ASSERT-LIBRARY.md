## Node's Assert Library Cheat Sheet

Node.js's Assert module provides a set of assertion functions for verifying invariants, primarily used for writing tests. It's a way to check if a particular condition is true and throw an AssertionError if not. This cheat sheet covers the most commonly used methods in the Assert library.

### Basic Usage

First, you need to include the Assert module in your Node.js script:

```javascript
const assert = require('assert');
```

### Assertion Methods

#### assert(value[, message])

- **Purpose**: Tests if `value` is truthy. If not, throws an AssertionError, optionally with `message`.
- **Example**:

  ```javascript
  assert(true); // Does nothing
  assert(0); // Throws AssertionError
  ```

#### assert.ok(value[, message])

- **Purpose**: Alias of `assert(value[, message])`.
- **Example**:

  ```javascript
  assert.ok(true); // Does nothing
  assert.ok(0); // Throws AssertionError
  ```

#### assert.equal(actual, expected[, message])

- **Purpose**: Tests shallow, coercive equality with the equal comparison operator (`==`).
- **Example**:

  ```javascript
  assert.equal(1, '1'); // Does nothing
  assert.equal(1, 2); // Throws AssertionError
  ```

#### assert.strictEqual(actual, expected[, message])

- **Purpose**: Tests strict equality, as determined by the strict equality operator (`===`).
- **Example**:

  ```javascript
  assert.strictEqual(1, 1); // Does nothing
  assert.strictEqual(1, '1'); // Throws AssertionError
  ```

#### assert.notEqual(actual, expected[, message])

- **Purpose**: Tests shallow, coercive non-equality with the not equal comparison operator (`!=`).
- **Example**:

  ```javascript
  assert.notEqual(1, 2); // Does nothing
  assert.notEqual(1, '1'); // Throws AssertionError
  ```

#### assert.notStrictEqual(actual, expected[, message])

- **Purpose**: Tests strict non-equality, as determined by the strict not equal operator (`!==`).
- **Example**:

  ```javascript
  assert.notStrictEqual(1, '1'); // Does nothing
  assert.notStrictEqual(1, 1); // Throws AssertionError
  ```

#### assert.deepEqual(actual, expected[, message])

- **Purpose**: Tests for deep equality. It considers object properties and their values.
- **Example**:

  ```javascript
  assert.deepEqual({a: 1}, {a: '1'}); // Does nothing, because of coercion
  assert.deepEqual({a: 1}, {a: 1, b: 2}); // Throws AssertionError
  ```

#### assert.deepStrictEqual(actual, expected[, message])

- **Purpose**: Tests for deep strict equality. Similar to `deepEqual` but performs strict comparison.
- **Example**:

  ```javascript
  assert.deepStrictEqual({a: 1}, {a: 1}); // Does nothing
  assert.deepStrictEqual({a: 1}, {a: '1'}); // Throws AssertionError
  ```

#### assert.throws(block[, error][, message])

- **Purpose**: Expects the `block` function to throw an error. Optionally, error can specify the type of error expected or a validation function.
- **Example**:

  ```javascript
  assert.throws(
    () => {
      throw new Error('Wrong value');
    },
    Error
  ); // Does nothing
  ```

#### assert.doesNotThrow(block[, error][, message])

- **Purpose**: Expects the `block` function not to throw an error. Optionally, error can specify the type of error not expected.
- **Example**:

  ```javascript
  assert.doesNotThrow(
    () => {
      console.log("Does nothing wrong");
    },
    Error
  ); // Does nothing
  ```

#### assert.fail([message])

- **Purpose**: Throws an AssertionError with the provided message.
- **Example**:

  ```javascript
  assert.fail('Intentional failure'); // Throws AssertionError with message 'Intentional failure'
  ```

#### assert.ifError(value)

- **Purpose**: Throws `value` if `value` is truthy. Useful for testing callbacks.
- **Example**:

  ```javascript
  assert.ifError(null); // Does nothing
  assert.ifError('error'); // Throws 'error'
  ```

### Best Practices

- Use strict assertions (`strictEqual`, `deepStrictEqual`) for clearer, more predictable tests.
- Choose `deepStrictEqual` over `deepEqual` to avoid unintended coercive equality passes.
- Utilize `assert.throws` and `assert.doesNotThrow` to test for function errors effectively.
- Remember, assertions are not just for automated tests; they can help enforce type checks or validate assumptions in regular code.

By incorporating these assertions appropriately, you can enhance the reliability and maintainability of your Node.js applications and tests.