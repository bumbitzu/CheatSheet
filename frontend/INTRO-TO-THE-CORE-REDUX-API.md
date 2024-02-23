## 👩🏻‍🏫Core Redux API
### 1. Importing `createStore` from Redux

To start using Redux, you need to import the `createStore` function from the Redux library. This function is used to create a new Redux store that holds the complete state tree of your application.

```javascript
import { createStore } from 'redux';
```

### 2. Creating a Redux Store

The `createStore` function requires a reducer function as its first argument. The reducer function is where you define how the state updates in response to actions sent to the store.

```javascript
const reducer = (state = {}, action) => {
  // Handle actions
  return state;
};

const store = createStore(reducer);
```

### 3. Getting the Current State

You can access the current state of the Redux store using the `getState` method. This is useful for reading the state value within your application.

```javascript
const currentState = store.getState();
console.log(currentState);
```

### 4. Dispatching Actions

Actions are payloads of information that send data from your application to your store. Use `dispatch` method to send actions to the store.

```javascript
store.dispatch({
  type: 'ACTION_TYPE',
  payload: 'data'
});
```

### 5. Creating Action Creators

Action creators are functions that create actions. It's a good practice to use them to avoid duplicating action object creation across your application.

```javascript
function myActionCreator(data) {
  return {
    type: 'MY_ACTION',
    payload: data
  };
}

store.dispatch(myActionCreator('example data'));
```

### 6. Registering Change Listeners

Use `subscribe` method to register a listener that will be called every time an action is dispatched, and some part of the state tree may potentially have changed.

```javascript
const unsubscribe = store.subscribe(() => console.log('State after dispatch:', store.getState()));

// To unsubscribe the listener
unsubscribe();
```

### 7. Connecting Redux to User Interface

While Redux itself is UI-agnostic, it is commonly used with libraries like React. To connect Redux to a UI layer, you typically use the `react-redux` library, which provides a `Provider` component to make the store available to all container components in the application’s hierarchy, and `connect` function to connect React components to the Redux store.

```javascript
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

// Wrap your app's root component with Provider and pass the Redux store as a prop
<Provider store={store}>
  <YourApp />
</Provider>

// Use connect to connect a React component to the Redux store
const mapStateToProps = state => ({
  // Map state to props
});

const mapDispatchToProps = {
  // Map dispatch to props
};

export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);
```

## 👩🏻‍🏫Example

### Step 1: Setting Up the Environment

Assuming you have Node.js installed, you'll first need to set up a project and install Redux:

```bash
mkdir redux-example
cd redux-example
npm init -y
npm install redux
```

### Step 2: Create a Reducer

In a file named `reducer.js`, define a reducer function for the counter application. This function will specify how the state changes in response to actions.

```javascript
// reducer.js

// Define initial state
const initialState = {
  count: 0
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

### Step 3: Create the Store

In your main file (e.g., `index.js`), import `createStore` from Redux and the reducer you just defined. Then, create the Redux store.

```javascript
// index.js

import { createStore } from 'redux';
import counterReducer from './reducer';

// Create the store
const store = createStore(counterReducer);

console.log(store.getState()); // Initial state: { count: 0 }
```

### Step 4: Dispatching Actions

Next, dispatch some actions to change the state of the application.

```javascript
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 2 }

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // { count: 1 }
```

### Step 5: Implementing Action Creators

For convenience, define action creators for your actions in `actions.js`.

```javascript
// actions.js

export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});
```

Import these action creators in your `index.js` and use them to dispatch actions.

```javascript
// Add to index.js

import { increment, decrement } from './actions';

store.dispatch(increment());
console.log(store.getState()); // { count: 2 }

store.dispatch(decrement());
console.log(store.getState()); // { count: 1 }
```

### Step 6: Subscribing to Store Updates

To react to state changes, subscribe to the store and log the current state whenever it changes.

```javascript
store.subscribe(() => console.log('Updated state:', store.getState()));
```

### Step 7: Connecting to a User Interface

While this example doesn't integrate with a UI library like React, connecting Redux to a UI involves passing the store's state to your components and dispatching actions based on user interactions. In a React app, you would use `react-redux` to `connect` your components to the store.