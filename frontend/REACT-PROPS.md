## React Props

Props (short for "properties") are a core concept in React, allowing you to pass data from a parent component to a child component. This cheat sheet covers how to use props effectively in your React applications, including passing data, handling events, and utilizing prop types for better code reliability and readability.

### Passing Props

Props are passed to components in a way that is similar to passing arguments to a function. Props are immutable within the child component.

#### Basic Usage

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Welcome name="Alice" />;
```

#### Destructuring Props

For better readability and convenience, you can destructure props in the function parameter.

```javascript
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### Passing Multiple Props

You can pass as many props as needed to a component. It's common to pass multiple data points or callback functions as props.

```javascript
function UserGreeting({ name, age, isLoggedIn }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {isLoggedIn && <p>Your age is {age}.</p>}
    </div>
  );
}
```

### Handling Events

Pass functions as props to handle events in child components.

```javascript
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const handleClick = () => alert('Button clicked!');
  return <Button onClick={handleClick}>Click Me</Button>;
}
```

### Children Prop

The `children` prop is used to pass elements directly into the output of a component, allowing for more flexible compositions.

```javascript
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Content goes here...</p>
    </Card>
  );
}
```

### Default Props

Default props define default values for props, ensuring that components have usable data even if props aren't explicitly passed.

```javascript
function Greeting({ name = 'User' }) {
  return <div>Hello, {name}!</div>;
}
```

### PropTypes for Type Checking

Using `PropTypes`, you can specify the expected type of each prop, helping catch bugs by validating data types of props.

```javascript
import PropTypes from 'prop-types';

function UserProfile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
```

### Key Points

- Props are read-only and cannot be modified by the child component.
- Props allow components to be dynamic and reusable by passing data from parent to child.
- Destructuring props in the component's parameter list enhances readability.
- The `children` prop enables you to pass components or JSX directly between the opening and closing tags of a component.
- `PropTypes` provide a powerful way to document the intended types of props passed to a component and ensure your components are used correctly.
