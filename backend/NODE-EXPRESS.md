## Node Express

Express.js is a fast, unopinionated, minimalist web framework for Node.js, ideal for building web applications and APIs. This cheat sheet provides a concise guide to setting up a basic back-end project with Express.js.

### Setting Up Your Project

1. **Initialize a New Node.js Project**
   - Run `npm init` in your terminal in the project directory.
   - Fill out the package details or run `npm init -y` to skip.

2. **Install Express**
   - Run `npm install express` to add Express to your project.

### Basic Server Setup

```javascript
// Import Express
const express = require('express');

// Initialize the Express app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Start listening on the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Routing

Express uses a routing table to keep track of how to respond to client requests.

```javascript
// Define a route for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route for POST requests
app.post('/data', (req, res) => {
  res.json({ message: 'Data received' });
});

// Capture dynamic data from the URL
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});
```

### Middleware

Middleware functions can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.

```javascript
// Example of a simple logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to the next middleware
});

// Built-in middleware to handle URL encoded data
// (For example, form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
```

### Error Handling

Express has a default error-handling middleware function, but you can define custom error handlers.

```javascript
// Custom Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### Serving Static Files

Serve static files such as images, CSS files, and JavaScript files using the `express.static` built-in middleware function.

```javascript
app.use(express.static('public'));
```

This will serve the files located in the `public` directory.

### Environment Configuration

Use environment variables to manage your application’s configuration.

1. **Install dotenv**: `npm install dotenv`.
2. **Setup dotenv**: At the top of your main file (e.g., `app.js`), add `require('dotenv').config();`.
3. **Create a `.env` file**: Add environment-specific variables in the form of `NAME=VALUE`.

```plaintext
PORT=5000
DB_HOST=localhost
```

### Conclusion

This cheat sheet covers the basics of setting up a back-end project with Express.js, including initializing your project, creating a basic server, routing, middleware, error handling, serving static files, and managing environment configuration. Experiment with these concepts to build more complex applications.