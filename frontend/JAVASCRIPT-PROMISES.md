## JavaScript Promises

JavaScript promises are a powerful abstraction for working with asynchronous operations. A promise represents an operation that hasn't completed yet but is expected in the future. Here’s a concise guide to understanding and using promises in JavaScript.

### Creating a Promise

A promise can be created using the `Promise` constructor which takes a function (executor) with two parameters: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation code here
  const condition = true; // Example condition
  if (condition) {
    resolve('Promise is resolved successfully.');
  } else {
    reject('Promise is rejected.');
  }
});
```

### Consuming a Promise

Promises can be consumed or used through their `then`, `catch`, and `finally` methods.

#### then()

Used to schedule a callback to be executed when the promise is successfully resolved.

```javascript
myPromise.then((value) => {
  console.log(value);
});
```

#### catch()

Used for error handling, to schedule a callback to be executed if the promise is rejected.

```javascript
myPromise.catch((error) => {
  console.error(error);
});
```

#### finally()

Used to execute a callback after the promise is either resolved or rejected. This is useful for cleanup.

```javascript
myPromise.finally(() => {
  console.log('Completed');
});
```

### Chaining Promises

Promises can be chained to perform sequential asynchronous operations.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    resolve('Data');
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Data
    return 'Processing data';
  })
  .then((processedData) => {
    console.log(processedData); // Processing data
  })
  .catch((error) => {
    console.error(error);
  });
```

### Promise.all()

Runs multiple promises in parallel and waits for all of them to complete. It returns a single Promise that resolves when all of the promises passed as an iterable have resolved or when the iterable contains no promises.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
```

### Promise.race()

Similar to `Promise.all()`, but it resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two", as it is faster
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of promises, making asynchronous code look and behave a little more like synchronous code.

#### Async Function

An `async` function is a function declared with the `async` keyword, and the await keyword is permitted within it.

```javascript
async function myFunction() {
  return 'Success';
}
```

#### Await

The `await` keyword causes the JavaScript runtime to pause your code on this line, not blocking other operations, until the promise settles, and then return the resolved value.

```javascript
async function asyncCall() {
  const result = await myFunction();
  console.log(result); // Success
}

asyncCall();
```