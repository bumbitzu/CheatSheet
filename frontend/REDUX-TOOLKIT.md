## Redux Toolkit

This cheat sheet provides a foundational overview of Redux Toolkit. It includes setting up your store, creating slices for managing state, and handling asynchronous actions. Redux Toolkit simplifies Redux development by reducing boilerplate and enforcing best practices.

### Step 1: Setup

Assuming you have `create-react-app` installed, start by creating a new React application and installing necessary dependencies:

```bash
npx create-react-app redux-toolkit-example
cd redux-toolkit-example
npm install @reduxjs/toolkit react-redux
```

### Step 2: Configure the Store

Create a `store.js` file under `src/app` to configure your Redux store.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
```

### Step 3: Setup the Counter Feature

Create a counter slice with increment, decrement, and incrementByAmount actions.

```javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### Step 4: Setup the User Feature

Create a user slice to fetch user data asynchronously.

```javascript
// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId, thunkAPI) => {
    const response = await fetch(`https://api.example.com/user/${userId}`);
    return await response.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: null,
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = 'idle';
        state.entities = null;
      });
  },
});

export default userSlice.reducer;
```

### Step 5: Setup Provider in the App Entry Point

Use the `Provider` component to pass the Redux store to your React application.

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Step 6: Create Counter Component

Implement a Counter component to display and control the counter's state.

```javascript
// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}
```

### Step 7: Create a User Component to Display User Data

Implement a component to display user data and trigger data fetching.

```javascript
// src/features/user/User.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from './userSlice';

export function User({ userId }) {
  const user = useSelector((state) => state.user.entities);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);

  if (loading === 'pending') return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}
    </div>
  );
}
```

### Step 8: Integrate Components in App

Finally, integrate your components into the `App.js`.

```javascript
// src/App.js
import React from 'react';
import { Counter } from './features/counter/Counter';
import { User } from './features/user/User';

function App() {
  return (
    <div className="App">
      <Counter />
      <User userId="1" /> {/* Assuming "1" is a valid user ID */}
    </div>
  );
}

export default App;
```

This example demonstrates the essentials of using Redux Toolkit in a React application, covering state management, dispatching actions, and handling asynchronous requests.