## Express Routes

Express.js is a popular web application framework for Node.js designed for building web applications and APIs. Routing refers to how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).

### Basic Route Handling

```javascript
const express = require('express');
const app = express();

// Respond to GET request on the root
app.get('/', function(req, res) {
    res.send('GET request to the homepage');
});

// Respond to POST request on the root
app.post('/', function(req, res) {
    res.send('POST request to the homepage');
});

// Respond to a PUT request to the /user route
app.put('/user', function(req, res) {
    res.send('PUT request to /user');
});

// Respond to a DELETE request to the /user route
app.delete('/user', function(req, res) {
    res.send('DELETE request to /user');
});
```

### Route Parameters

For capturing values from the URL, use route parameters:

```javascript
// Respond to requests for a user with a specific id
app.get('/users/:userId', function(req, res) {
    res.send(req.params);
});
```

### Multiple Callback Functions

You can provide multiple callback functions that behave like middleware to handle a request.

```javascript
app.get('/example', (req, res, next) => {
    console.log('the response will be sent by the next function...');
    next();
}, (req, res) => {
    res.send('Hello from B!');
});
```

### Response Methods

- `res.send()`: Send a response of various types.
- `res.json()`: Send a JSON response.
- `res.redirect()`: Redirect a request.
- `res.render()`: Render a view template.

### Chainable Route Handlers

Using `app.route()` to define multiple actions on a single route.

```javascript
app.route('/book')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });
```

### Router Module

For more complex applications, you can create a router as a module in a separate file and import it.

```javascript
// In router file (books.js)
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Books home page');
});

router.get('/about', function(req, res) {
    res.send('About books');
});

module.exports = router;

// In the main application file
const books = require('./books');

app.use('/books', books);
```