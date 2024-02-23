## JavaScript Async/Await Cheat Sheet

Async/await in JavaScript is syntactic sugar built on top of promises, designed to simplify asynchronous programming by making asynchronous code look and behave more like synchronous code. This cheat sheet provides an overview of how to use async/await effectively.

### Basics

#### Async Function

- Declared with the `async` keyword.
- Always returns a promise.
- Allows `await` to be used within it.

```javascript
async function fetchData() {
  return 'Data fetched';
}
```

#### Await Operator

- Used inside an async function to wait for a promise to settle.
- Pauses the execution of the async function until the promise is resolved or rejected.
- Returns the resolved value of the promise or throws an error if the promise is rejected.

```javascript
async function displayData() {
  const data = await fetchData();
  console.log(data); // 'Data fetched'
}
```

### Error Handling

#### Try/Catch

Use try/catch within async functions to handle rejected promises.

```javascript
async function fetchAndDisplayData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
```

### Combining Async/Await with Other Promises

#### Promise.all()

Use `Promise.all()` with async/await to wait for multiple promises to resolve.

```javascript
async function fetchMultipleData() {
  try {
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log(data1, data2);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
```

### Looping Over Promises

#### For...of with Async/Await

Use async/await within a for...of loop to handle asynchronous operations in sequence.

```javascript
async function fetchSequentialData(urls) {
  for (const url of urls) {
    const data = await fetchData(url);
    console.log(data);
  }
}
```

#### Parallel Execution with Promise.all()

To execute promises in parallel within an async function, use `Promise.all()`.

```javascript
async function fetchParallelData(urls) {
  const promises = urls.map(url => fetchData(url));
  const results = await Promise.all(promises);
  console.log(results);
}
```

### Practical Tips

- **Async/Await with forEach**: `forEach` does not work with async/await as expected. Use `for...of` or `Promise.all()` with `.map()` for iterating over asynchronous operations.
- **Error Handling**: Always use try/catch blocks for error handling in async functions to catch rejected promises.
- **Avoiding Unnecessary Waits**: Be cautious of unnecessary use of `await` that could inadvertently make asynchronous operations sequential. Use `Promise.all()` for concurrent operations.
- **Async IIFE**: To immediately execute an async function, use an async IIFE (Immediately Invoked Function Expression).

  ```javascript
  (async () => {
    const data = await fetchData();
    console.log(data);
  })();
  ```

### Debugging

- **Stack Traces**: Async/await provides cleaner stack traces for errors compared to raw promises.
- **Debugging**: Most modern debuggers support stepping through async/await calls as if they were synchronous, making debugging more intuitive.

Async/await simplifies working with promises, making asynchronous code easier to write and understand. By using async functions and the await operator, you can perform asynchronous operations in a more linear, blocking style, while still taking advantage of JavaScript's non-blocking capabilities.