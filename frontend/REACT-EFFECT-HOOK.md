## React Effect Hook

The React Effect Hook, `useEffect`, allows you to perform side effects in function components. It is part of the Hooks API introduced in React 16.8. This cheat sheet provides an overview of how to use `useEffect` effectively in your React components.

### Importing useEffect

To use `useEffect`, you first need to import it from React:

```javascript
import React, { useEffect } from 'react';
```

### Basic Usage

`useEffect` takes two arguments: a function that contains the side-effect logic, and an optional dependency array that controls when the effect runs.

```javascript
useEffect(() => {
  // Side-effect logic here
}, [dependencies]);
```

- The side-effect function runs after the first render and after every update that changes one of the dependencies listed in the dependency array.
- If the dependency array is omitted, the effect runs after every render.
- If the dependency array is empty (`[]`), the effect runs only once, after the initial render.

### Cleanup Function

If your effect sets up a subscription or listeners that should be cleaned up to prevent memory leaks, return a cleanup function from the effect:

```javascript
useEffect(() => {
  // Setup logic here (e.g., adding an event listener)
  
  return () => {
    // Cleanup logic here (e.g., removing the event listener)
  };
}, [dependencies]);
```

### Skipping Effects

To skip applying an effect if certain values haven't changed between re-renders, include those values in the dependency array:

```javascript
useEffect(() => {
  // This effect only runs if `value` changes.
}, [value]);
```

### Common Use Cases

- **Data fetching**: Requesting data from an API and storing it in state.
- **Subscriptions**: Setting up and tearing down listeners or subscriptions.
- **DOM updates**: Performing manual DOM manipulations or integrations with non-React libraries.

### Example: Fetching Data

```javascript
import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      {data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}
    </div>
  );
}
```

### Tips

- **Multiple Effects**: It's common to have multiple `useEffect` calls in a single component, each with its own concerns.
- **Optimizing Performance**: Be cautious with your dependency array to avoid unnecessary effect executions. Ensure that objects, arrays, and functions are stable between renders if they are dependencies.
- **Debugging**: If an effect runs more often than you expect, double-check the dependency array. It might include values that change too frequently.