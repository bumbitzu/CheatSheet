## React State Hook

The React State Hook, `useState`, is a fundamental hook introduced in React 16.8 that allows function components to have state. This cheat sheet covers how to use `useState` effectively in your React components.

### Importing useState

Before you can use the `useState` hook, you must import it from React:

```javascript
import React, { useState } from 'react';
```

### Basic Usage

`useState` returns an array with two elements: the current state value and a function that lets you update it. You can use array destructuring to access these elements:

```javascript
const [state, setState] = useState(initialState);
```

- `initialState`: The initial state value, which can be a number, string, boolean, object, or array. This argument is optional; if omitted, the state will be `undefined`.

### Updating State

To update the state, call the `setState` function with the new value:

```javascript
setState(newState);
```

- `newState`: The new value for the state. This can be a direct value or a function that receives the previous state and returns the new state.

### Functional Updates

If the new state is computed using the previous state, pass a function to `setState`:

```javascript
setState(prevState => prevState + 1);
```

This ensures that `prevState` is the most current state value when the update is applied.

### Object and Array State

For object or array state, remember to spread the previous state and update only the parts that changed:

```javascript
// Object state
setState(prevState => ({ ...prevState, key: newValue }));

// Array state
setState(prevState => [...prevState, newElement]);
```

### Lazy Initial State

For expensive initial state calculations, pass a function to `useState`:

```javascript
const [state, setState] = useState(() => computeInitialState());
```

The function `computeInitialState` will only be executed on the initial render, optimizing performance.

### Use Cases

- **Counters**: Managing count state in a component.
- **Forms**: Handling form input values and validation state.
- **Visibility**: Toggling visibility of components (e.g., modals, dropdowns).
- **Data fetching**: Storing fetched data from an API.

### Example: Counter Component

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

This cheat sheet provides a quick overview of how to use the `useState` hook in React. Remember, state updates may be asynchronous, so use functional updates when the new state depends on the old state.