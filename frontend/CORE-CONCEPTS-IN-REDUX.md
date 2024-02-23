## Redux Core Concepts

This cheat sheet explains the core concepts of Redux using a simple application state management example, which simulates managing supplies, distance, days, and cash for a wagon journey.

### Initial State

- **Define the initial state** of your application:

  ```javascript
  const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200,
  };
  ```

### Actions

- **Actions** are JavaScript objects that send data from your application to your store. They must have a `type` property.
- Example actions for the wagon journey:

  ```javascript
  { type: "gather" }
  { type: "travel", payload: 1 } // days to travel
  { type: "tippedWagon" }
  { type: "sell" }
  { type: "buy" }
  { type: "theft" }
  ```

### Reducers

- **Reducers** specify how the application's state changes in response to actions sent to the store.
- Implement the reducer function:

  ```javascript
  reducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case "gather":
        return {...state, supplies: state.supplies + 15, days: state.days + 1};
      case "travel":
        if (state.supplies - 20 * action.payload < 0) return state;
        return {...state, supplies: state.supplies - 20 * action.payload, distance: state.distance + 10 * action.payload, days: state.days + action.payload};
      case "tippedWagon":
        return {...state, supplies: state.supplies - 30, days: state.days + 1};
      case "sell":
        if (state.supplies - 20 < 0) return state;
        return {...state, supplies: state.supplies - 20, cash: state.cash + 5};
      case "buy":
        if (state.cash - 15 < 0) return state;
        return {...state, supplies: state.supplies + 25, cash: state.cash - 15};
      case "theft":
        return {...state, cash: state.cash / 2};
      default:
        return state;
    }
  };
  ```

### Dispatching Actions

- **Dispatching actions** to update the state:
  ```javascript
  let wagon = reducer(undefined, {});
  wagon = reducer(wagon, { type: "travel", payload: 1 });
  wagon = reducer(wagon, { type: "gather" });
  // Repeat for other actions
  ```

### Key Concepts

- **Action Types:** Unique constants or strings that identify the action being performed.
- **Payload:** Additional information that may be needed to perform the action.
- **State Immutability:** When changing the state, you should return a new object rather than modifying the existing state.
- **Reducers are Pure Functions:** Given the same arguments, should return the exact same state without side effects.

### Best Practices

- **Action Creators:** Write functions that create action objects to standardize and simplify action creation.
- **Splitting Reducers:** For larger applications, split reducers into smaller functions that manage specific parts of the state, then combine them.
- **Immutable Update Patterns:** Use spread syntax (`...state`) or utilities like Immer for complex state updates to avoid direct state mutation.

## Example

```javascript
const initialWagonState = {
  suplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};
reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather":
      return {
        ...state,
        suplies: state.suplies + 15,
        days: state.days + 1,
      };
    case "travel":
      const daysToTravel = action.payload;
      if (state.suplies - 20 * action.payload < 0) {
        return state;
      } else {
        return {
          ...state,
          suplies: state.suplies - 20 * daysToTravel,
          distance: state.distance + 10 * daysToTravel,
          days: state.days + daysToTravel,
        };
      }

    case "tippedWagon":
      return {
        ...state,
        suplies: state.suplies - 30,
        days: state.days + 1,
      };
    case "sell":
      if (state.suplies - 20 < 0) {
        return state;
      } else {
        return {
          ...state,
          suplies: state.suplies - 20,
          cash: state.cash + 5,
        };
      }
    case "buy":
      if (state.cash - 15 < 0) {
        return state;
      } else {
        return {
          ...state,
          suplies: state.suplies + 25,
          cash: state.cash - 15,
        };
      }
    case "theft":
      return {
        ...state,
        cash: state.cash / 2,
      };
    default: {
      return state;
    }
  }
};
let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(wagon, { type: "travel", payload: 1 });
console.log(wagon);
wagon = reducer(wagon, { type: "gather" });
console.log(wagon);
wagon = reducer(wagon, { type: "tippedWagon" });
console.log(wagon);
wagon = reducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "theft", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "buy", payload: 3 });
console.log(wagon);

```