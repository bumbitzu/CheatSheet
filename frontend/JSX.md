## Basic JSX 

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. By using JSX, you can write HTML structures in the same file as JavaScript code, making the development process more intuitive and efficient. This cheat sheet covers the basics of JSX, including its syntax, how to embed expressions, apply styles, and handle comments.

### Basic Syntax

JSX resembles HTML but directly compiles into JavaScript functions. A basic JSX expression:

```javascript
const element = <h1>Hello, world!</h1>;
```

### Embedding Expressions

You can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.

```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

### JSX is an Expression

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### Attributes

You can use quotes to specify string literals as attributes or curly braces to embed a JavaScript expression in an attribute.

```javascript
const element = <div tabIndex="0"></div>;
const elementWithExpression = <img src={user.avatarUrl}></img>;
```

### Using JSX for HTML Attributes

JSX uses camelCase property naming convention instead of HTML attributes. For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.

```javascript
const element = <div className="menu"></div>;
```

### Children

JSX tags may contain children:

```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Welcome to our service.</h2>
  </div>
);
```

### Styles

Inline styles are specified as an object with camelCased properties rather than a string. This object is passed to the `style` attribute using curly braces.

```javascript
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
};

const element = <div style={divStyle}>Hello World!</div>;
```

### Comments

JSX comments are enclosed in curly braces `{}` and use the syntax `/* */`.

```javascript
const element = (
  <div>
    {/* This is a comment */}
    <h1>Hello, world!</h1>
  </div>
);
```

### Self-closing Tags

If a JSX tag doesn't contain children, you must close it with `/>` just like in XML or HTML.

```javascript
const element = <img src={user.avatarUrl} />;
```

### Key Points

- JSX combines HTML and JavaScript.
- Embed expressions in JSX using `{}`.
- JSX elements are JavaScript objects.
- Use camelCase for JSX attributes.
- Inline styles are specified as objects.
- Comments in JSX are wrapped in `{/* */}`.


## Advanced JSX

JSX, while simple in appearance, supports a range of advanced features that make it a powerful tool for developing complex React applications. This cheat sheet delves into advanced aspects of JSX, including conditional rendering, loops, handling events, component composition, and optimizing performance.

### Conditional Rendering

JSX allows conditional rendering in several ways, often using JavaScript logical operators like `&&` and the ternary operator `? :`.

#### Inline If with Logical `&&` Operator

Render an element only if a condition is true:

```javascript
{
  isLoggedIn && <LogoutButton />;
}
```

#### Inline If-Else with Ternary Operator

Render elements conditionally:

```javascript
{
  isLoggedIn ? <LogoutButton /> : <LoginButton />;
}
```

### Rendering Lists

You can render lists in JSX by using the JavaScript `map()` function:

```javascript
const todos = ['Finish doc', 'Submit review', 'Reply to emails'];

const todoList = (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
  </ul>
);
```

**Note**: Always use keys when mapping components to help React identify which items have changed, are added, or are removed.

### Handling Events

JSX provides a syntax for handling events through camelCase event handlers:

```javascript
function handleClick() {
  console.log('Button clicked!');
}

const element = <button onClick={handleClick}>Click me</button>;
```

### Component Composition

Components can reference other components in their output:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

### Spread Attributes

If you already have `props` as an object, you can pass it to a JSX element using the spread operator `...`:

```javascript
const props = {firstName: 'Ben', lastName: 'Hector'};
const greeting = <Greeting {...props} />;
```

### Fragments

Use React Fragments to group a list of children without adding extra nodes to the DOM:

```javascript
<>
  <ChildA />
  <ChildB />
  <ChildC />
</>
```

Or with explicit `<React.Fragment>` for key usage:

```javascript
<React.Fragment>
  <ChildA />
  <ChildB />
</React.Fragment>
```

### Higher-Order Components (HOC)

A higher-order component is a function that takes a component and returns a new component:

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### Optimizing Performance

- **PureComponent**: Reduces the number of render operations in the component by shallowly comparing props and state.
- **React.memo**: A higher order component that memoizes a component to prevent unnecessary re-renders for the same props.

### Accessibility

Ensure accessibility by using semantic HTML elements and ARIA roles where applicable. JSX supports all ARIA attributes as props:

```javascript
const element = <div role="button" tabIndex={0}>Accessible Div Button</div>;
```

### Key Takeaways

- Use logical operators and ternary expressions for conditional rendering.
- Utilize `map()` for lists, ensuring each item has a unique `key`.
- Handle events with camelCase event handlers in JSX.
- Compose components for reusability and abstraction.
- Use spread attributes to pass props efficiently.
- Optimize performance with `PureComponent`, `React.memo`, and careful re-rendering strategies.
- Embrace accessibility practices within JSX to enhance user experience for all users.

Mastering these advanced JSX techniques will enhance your ability to write efficient, clean, and maintainable React components.