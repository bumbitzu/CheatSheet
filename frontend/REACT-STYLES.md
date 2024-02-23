## React Styles

Styling in React can be achieved through various methods, each with its own use cases and advantages. This cheat sheet provides an overview of the main techniques for applying styles to React components.

### Inline Styles

Inline styles in React are specified as an object, with camelCased properties rather than the hyphenated style names used in CSS.

#### Example

```javascript
function MyComponent() {
  const style = { color: 'blue', fontSize: '20px' };
  return <div style={style}>Styled Text</div>;
}
```

- Pros: Quick and easy for simple styles; useful for dynamic styling based on props or state.
- Cons: Not suitable for complex styles; no pseudo-classes or media queries.

### CSS Stylesheets

Traditional CSS stylesheets can be used in React by importing the stylesheet into the component file. This is the most familiar approach for developers with a background in traditional web development.

#### Example

```css
/* styles.css */
.myComponent {
  color: red;
  font-size: 20px;
}
```

```javascript
import React from 'react';
import './styles.css';

function MyComponent() {
  return <div className="myComponent">Styled Text</div>;
}
```

- Pros: Familiar syntax; full CSS capabilities.
- Cons: Global scope by default (can be mitigated with CSS Modules or other methodologies).

### CSS Modules

CSS Modules provide a way to scope CSS by automatically generating unique class names. When you import a CSS Module, it exports an object where keys are your class names and values are the generated unique names.

#### Example

```css
/* styles.module.css */
.myComponent {
  color: green;
  font-size: 20px;
}
```

```javascript
import React from 'react';
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.myComponent}>Styled Text</div>;
}
```

- Pros: Local scope by default, eliminating class name conflicts; composability.
- Cons: Requires build setup (e.g., Webpack or Create React App).

### Styled-components

Styled-components is a library for React and React Native that allows you to use component-level styles in your application. It utilizes tagged template literals to style your components.

#### Example

```javascript
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: purple;
  font-size: 20px;
`;

function MyComponent() {
  return <StyledDiv>Styled Text</StyledDiv>;
}
```

- Pros: Component-scoped styles; dynamic styling based on props; can define complex styles with JavaScript.
- Cons: Additional library dependency; learning curve for the tagged template literal syntax.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that can be used in React projects. It encourages the use of utility classes directly in your JSX to style components.

#### Example

```javascript
function MyComponent() {
  return <div className="text-pink-500 text-lg">Styled Text</div>;
}
```

- Pros: Highly customizable; encourages consistency across the project; reduces CSS bloat by reusing utility classes.
- Cons: Utility-first approach can lead to verbose class names; learning curve for the utility class names.

### Emotion

Emotion is a performant and flexible CSS-in-JS library that allows you to style applications quickly with string or object styles.

#### Example

```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
  color: orange;
  font-size: 20px;
`;

function MyComponent() {
  return <div css={style}>Styled Text</div>;
}
```

- Pros: Supports both object and string styles; dynamic styling with props; composition of styles.
- Cons: Additional library dependency; may require setup for SSR (Server-Side Rendering).