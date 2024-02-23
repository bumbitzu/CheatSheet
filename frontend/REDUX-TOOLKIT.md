## Redux Toolkit

Redux Toolkit (RTK) is a toolset for efficient Redux development. It simplifies the store setup, reduces boilerplate code, and integrates best practices by default. This cheat sheet covers the essential concepts and APIs provided by Redux Toolkit.

### Setup

To start using Redux Toolkit, install it alongside React-Redux if you're using it with React:

```bash
npm install @reduxjs/toolkit react-redux
```

### 1. `configureStore()`

Simplifies store setup with sensible defaults. Automatically sets up the store with good defaults, such as Redux DevTools extension and thunk middleware.

#### Usage:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});
```

### 2. `createReducer()`

Simplifies reducer creation with modern JavaScript capabilities, allowing for a more readable syntax without the switch statement.

#### Usage:

```javascript
import { createReducer } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('counter/incremented', (state, action) => {
      state.value += 1;
    })
    .addCase('counter/decremented', (state, action) => {
      state.value -= 1;
    });
});
```

### 3. `createAction()`

Automatically generates action creator functions for the given action type string.

#### Usage:

```javascript
import { createAction } from '@reduxjs/toolkit';

export const incremented = createAction('counter/incremented');
// Usage: dispatch(incremented());
```

### 4. `createSlice()`

Automates the process of writing action creators and reducers. A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.

#### Usage:

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
```

### 5. `createAsyncThunk()`

Standardizes the handling of asynchronous actions in your Redux store.

#### Usage:

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId, thunkAPI) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return await response.json();
  }
);
```

### 6. `createEntityAdapter()`

Generates a set of reusable reducers and selectors for managing normalized state.

#### Usage:

```javascript
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Reducer logic
  },
});

export default usersSlice.reducer;
```

### 7. `createSelector()`

Re-export of Reselect's `createSelector` function for creating memoized selectors.

#### Usage:

```javascript
import { createSelector } from '@reduxjs/toolkit';

const selectUserIds = (state) => state.users.ids;
const selectUserEntities = (state) => state.users.entities;

const selectAllUsers = createSelector(
  [selectUserIds, selectUserEntities],
  (ids, entities) => ids.map((id) => entities[id])
);
```

Redux Toolkit streamlines Redux development, enforcing best practices, reducing boilerplate, and making your Redux code more maintainable.