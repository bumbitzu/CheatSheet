## React Router

React Router is a standard library for routing in React applications. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

### Setup and Installation

First, install React Router via npm or yarn:

```bash
npm install react-router-dom
## or
yarn add react-router-dom
```

### Basic Components

- **BrowserRouter**: A router that uses the HTML5 history API to keep your UI in sync with the URL.
- **Route**: Renders a UI component depending on the URL path.
- **Switch** (v5) / **Routes** (v6): Renders the first child `<Route>` or `<Redirect>` that matches the location.
- **Link**: Provides declarative navigation around your application.

### Example with React Router v6

```javascript
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

### Navigating Programmatically

Use the `useNavigate` hook in functional components for programmatic navigation:

```javascript
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }

  return <button onClick={handleClick}>Go Home</button>;
}
```

### Route Parameters

Capture dynamic parts of the URL using route parameters:

```javascript
<Route path="/user/:id" element={<User />} />
```

Access parameters in your component with the `useParams` hook:

```javascript
import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

### Nested Routes

React Router v6 supports nested routes. Nested routes reflect the component hierarchy in the URL path:

```javascript
<Route path="/users" element={<Users />}>
  <Route path=":id" element={<User />} />
  <Route path="new" element={<NewUser />} />
  <Route index element={<UsersHome />} />
</Route>
```

### Redirects

To redirect from one route to another, use the `<Navigate>` component:

```javascript
<Route path="/old-path" element={<Navigate replace to="/new-path" />} />
```

### Not Found Route

Handle unmatched routes with a catch-all route by using the `*` path:

```javascript
<Route path="*" element={<NotFound />} />
```

### Query Parameters

React Router does not directly provide a way to parse query parameters. Use the `useLocation` hook and a utility function, such as from the `query-string` library, to parse query parameters:

```javascript
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function MyComponent() {
  let location = useLocation();
  let queryParams = queryString.parse(location.search);
  return <div>Query Param Value: {queryParams.myParam}</div>;
}
```