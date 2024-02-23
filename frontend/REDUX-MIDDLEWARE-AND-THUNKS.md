## Redux Middleware and Thunks

Redux middleware allows you to write logic that intercepts actions before they reach the reducer, which can be used for logging, crash reporting, performing asynchronous tasks, and more. Redux Thunk is a middleware that lets you write action creators that return a function instead of an action. This cheat sheet covers the essentials of using middleware and thunks in Redux.

### Understanding Middleware

Middleware in Redux provides a third-party extension point between dispatching an action and the moment it reaches the reducer. You can use middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

#### Basic Middleware Structure

Here's a simple example of a logging middleware:

```javascript
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}
```

#### Applying Middleware to Store

Use `applyMiddleware()` from Redux to apply middleware to the store:

```javascript
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);
```

### Redux Thunk

Redux Thunk middleware allows you to write action creators that return a function instead of an action. Thunks can be used to delay the dispatch of an action or to dispatch only if a certain condition is met.

#### Installing Redux Thunk

```bash
npm install redux-thunk
```

#### Applying Redux Thunk Middleware

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

#### Writing a Thunk

Thunks are functions that return a function that takes `dispatch` and `getState` as arguments. You can then use `dispatch` to dispatch other actions and `getState` to access the current state.

```javascript
const fetchUserData = (userId) => (dispatch, getState) => {
  dispatch({ type: 'USER_FETCH_REQUESTED', payload: { userId } });
  fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(data => dispatch({ type: 'USER_FETCH_SUCCEEDED', payload: data }))
    .catch(error => dispatch({ type: 'USER_FETCH_FAILED', error }));
};
```

#### Dispatching a Thunk

Dispatch thunks just like regular actions:

```javascript
store.dispatch(fetchUserData('123'));
```

### Composing Multiple Middleware

You can apply multiple middleware to the store. Redux will apply the middleware in the order they are listed in the `applyMiddleware` function.

```javascript
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import loggerMiddleware from './middleware/logger';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);
```

Middleware and thunks in Redux enable powerful capabilities for handling side effects, asynchronous actions, conditional dispatching, and more, making them essential tools for complex application state management.