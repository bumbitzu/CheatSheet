# Redux Core Concepts

Redux is a predictable state container for JavaScript apps, often used with React but compatible with other frameworks. It helps manage the state of your application in a predictable way. This cheat sheet covers the core concepts of Redux including actions, reducers, and the store, along with basic usage examples.

## 1. Actions

Actions are plain JavaScript objects that represent an intention to change the state. They are the only way to send data from your application to your Redux store. Actions must have a `type` property that indicates the type of action being performed.

```javascript
// Action Type
const ADD_TODO = 'ADD_TODO';

// Action Creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
```

## 2. Reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

```javascript
function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}
```

## 3. Store

The store brings actions and reducers together. It holds the application state, allows access to the state via `getState()`, allows state to be updated via `dispatch(action)`, and registers listeners via `subscribe(listener)`.

```javascript
import { createStore } from 'redux';
let store = createStore(todoReducer);
```

## 4. Dispatching Actions

Dispatching an action is the process of sending out an action to trigger a state change. 

```javascript
store.dispatch(addTodo('Learn Redux'));
```

## 5. Subscribing to the Store

You can subscribe to the store to get notified of state changes.

```javascript
store.subscribe(() => console.log(store.getState()));
```

## 6. Combining Multiple Reducers

When your app grows, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

```javascript
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
});

let store = createStore(rootReducer);
```

## 7. Async Actions with Redux Thunk

Redux Thunk middleware allows you to write action creators that return a function instead of an action.

```javascript
function fetchTodos() {
  return function(dispatch) {
    return fetch('/todos')
      .then(response => response.json())
      .then(json => dispatch(addTodo(json.text)));
  };
}
```

To use Redux Thunk, apply the middleware to the Redux store.

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```