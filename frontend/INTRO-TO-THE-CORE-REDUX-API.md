## Core Redux API

Redux is a state management library that provides a few key APIs to manage the global state of JavaScript applications. This cheat sheet highlights the core Redux API methods, including those for creating stores, dispatching actions, and subscribing to changes.

### 1. `createStore(reducer, [preloadedState], [enhancer])`

Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.

#### Parameters:
- `reducer`: A function that returns the next state tree, given the current state tree and an action to handle.
- `preloadedState` (optional): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session.
- `enhancer` (optional): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.

#### Usage:
```javascript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
```

### 2. `combineReducers(reducers)`

Combines multiple reducer functions into a single reducing function you can pass to `createStore`.

#### Parameters:
- `reducers`: An object whose values correspond to different reducing functions that need to be combined into one.

#### Usage:
```javascript
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(rootReducer);
```

### 3. `applyMiddleware(...middlewares)`

Applies middleware to the dispatch method of the Redux store.

#### Parameters:
- `...middlewares`: The middleware chain to be applied.

#### Usage:
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

### 4. `bindActionCreators(actionCreators, dispatch)`

Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a `dispatch` call so they can be invoked directly.

#### Parameters:
- `actionCreators`: An object whose values are action creator functions.
- `dispatch`: The `dispatch` function provided by the Redux store.

#### Usage:
```javascript
import { bindActionCreators } from 'redux';
import * as TodoActionCreators from './todoActionCreators';
import store from './store';

const actions = bindActionCreators(TodoActionCreators, store.dispatch);
```

### 5. `compose(...functions)`

Composes functions from right to left. This is a functional programming utility, and is included in Redux as a convenience method for applying several store enhancers in a row.

#### Parameters:
- `...functions`: The functions to compose.

#### Usage:
```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);
```