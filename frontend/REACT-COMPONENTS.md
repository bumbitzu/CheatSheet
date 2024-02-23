## React Components

React components are the building blocks of any React application. This cheat sheet covers the basics of React components, including their types, lifecycle methods, hooks, and best practices for creating dynamic and reusable UI elements.

### Types of Components

#### Class Components

Class components are defined using ES6 classes and can hold and manage local state and lifecycle methods.

```javascript
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

#### Functional Components

Functional components are simpler and defined as JavaScript functions. They can accept props as arguments but don't have lifecycle methods or state without hooks.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Or using arrow function syntax:

```javascript
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
```

### State & Lifecycle in Class Components

Class components can manage their own state and have access to lifecycle methods.

#### State

```javascript
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

#### Lifecycle Methods

Commonly used lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

```javascript
class App extends Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Hello, World!</div>;
  }
}
```

### Hooks in Functional Components

Hooks are functions that let you “hook into” React state and lifecycle features from functional components. They make functional components as powerful as class components.

#### useState

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### useEffect

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Best Practices

- **Composition Over Inheritance**: Favor composition over inheritance for component hierarchy.
- **Single Responsibility**: Each component should focus on doing one thing well.
- **Pure Components**: Minimize side effects in components to make them predictable.
- **Reusable Components**: Design components to be reusable in different parts of your application.
- **Prop Types**: Use `propTypes` for prop validation to ensure components are used correctly.

React's component model provides a robust framework for building dynamic and responsive web applications. By understanding the core concepts and best practices, developers can efficiently create scalable and maintainable applications.