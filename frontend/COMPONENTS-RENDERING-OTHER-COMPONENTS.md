## React Components Rendering Other Components

In React, components can render other components, allowing for the creation of complex UIs made up of many simple, reusable components. This approach promotes the principle of component composition, where smaller components are combined to build more complex interfaces. This cheat sheet explains how to compose components effectively, demonstrate component hierarchies, and outline best practices for component composition.

### Basic Composition

Components can reference other components in their output. This is a fundamental aspect of React that enables the development of complex applications from simple, reusable components.

#### Example

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
```

In this example, the `App` component renders the `Welcome` component three times with different props.

### Composition vs. Inheritance

React has a powerful composition model, and recommends using composition instead of inheritance to reuse code between components.

#### Containment

Some components don’t know their children ahead of time. This is especially common for components like `Sidebar` or `Dialog` that represent generic “boxes”. We recommend using the special `children` prop to pass children elements directly into their output:

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

#### Specialization

Sometimes we think about components as being “special cases” of other components. In React, this is also achieved through composition, where a more “specific” component renders a more “generic” one and configures it with props:

```javascript
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

### Best Practices for Component Composition

- **Use Composition for Reusable Code**: Utilize composition to reuse code across components by wrapping components within other components.
- **Leverage `props.children` for Flexibility**: Use `props.children` to pass elements and components directly into a component’s output, providing flexibility in what content is rendered inside the component.
- **Specialization Is Key**: Create specialized components that render more generic components with specific props for a more precise UI.
- **Maintain a Clear Component Hierarchy**: Keep the component structure clear and understandable, avoiding unnecessary nesting or complexity.
- **Keep Components Small and Focused**: Adhere to the principle of single responsibility by ensuring components are small, focused, and do one thing well.

Component composition is a fundamental concept in React that encourages the development of well-structured, maintainable, and scalable applications. By understanding and applying these principles, developers can create complex UIs that are composed of simple, reusable components.