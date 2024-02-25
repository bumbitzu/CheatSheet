## Express Middleware

Express middleware are functions that execute during the lifecycle of a request to the Express server. These functions can access the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware can perform a wide range of tasks: from logging, parsing request bodies, to configuring CORS. This cheat sheet outlines how to use and create middleware in an Express.js application.

### Types of Middleware

1. **Application-level middleware**: Bound to an instance of `express`.
2. **Router-level middleware**: Similar to application-level, but bound to an instance of `express.Router()`.
3. **Error-handling middleware**: Custom functions to catch and handle errors.
4. **Built-in middleware**: Provided by Express like `express.static`, `express.json`, and `express.urlencoded`.
5. **Third-party middleware**: Added by using `npm` packages, such as `body-parser`, `cors`, `morgan`, etc.

### Using Middleware

#### Application-Level Middleware

```javascript
const express = require('express');
const app = express();

// Simple middleware that logs the request method and URL
app.use((req, res, next) => {
  console.log('Request Type:', req.method, 'Request URL:', req.url);
  next();
});
```

#### Router-Level Middleware

```javascript
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Router-specific middleware called');
  next();
});

// Define a route
router.get('/', (req, res) => {
  res.send('Router-level middleware example');
});

// Apply the router to the app
app.use('/', router);
```

#### Error-Handling Middleware

```javascript
// Error-handling middleware must have four arguments
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

#### Built-in Middleware

```javascript
// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
```

#### Third-Party Middleware

Example using `morgan` for HTTP request logging:

```bash
npm install morgan
```

```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

### Creating Custom Middleware

Custom middleware can be created to handle various tasks like authentication, logging, data processing, etc.

```javascript
function myMiddleware(req, res, next) {
  // Middleware logic goes here
  console.log('My Middleware');
  next(); // Pass control to the next middleware function
}

// Use the middleware
app.use(myMiddleware);
```

#### Conditional Middleware

Sometimes you might want to apply middleware only under certain conditions. This can be achieved by wrapping your middleware in a function.

```javascript
function conditionalMiddleware(condition) {
  return function(req, res, next) {
    if (condition) {
      // Execute middleware logic
      console.log('Condition met, middleware executed');
      next();
    } else {
      // Skip this middleware
      next('route'); // Pass control to the next route
    }
  };
}

// Use the conditional middleware
app.use(conditionalMiddleware(true)); // Change the condition as needed
```

### Best Practices

- **Modularity**: Write modular middleware to handle specific tasks, making them reusable and maintainable.
- **Order of Middleware**: Be mindful of the order in which you add middleware to your application; it can affect the execution flow and outcome.
- **Error Handling**: Use or create error-handing middleware to manage and respond to errors gracefully.
- **Security**: Implement security-related middleware for tasks like CORS configuration, helmet for secure HTTP headers, etc.