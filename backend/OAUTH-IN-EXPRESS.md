## OAuth 2.0 in Express

OAuth 2.0 is a protocol that allows applications to secure authorization in a simple and secure way from web, mobile, and desktop applications. This cheat sheet covers the basics of implementing OAuth 2.0 in an Express.js application.

### Setting Up Express

Before integrating OAuth 2.0, ensure you have a basic Express application running.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### Installing Dependencies

You'll need `express`, `dotenv` for environment variables, and `passport` with `passport-oauth2` for OAuth 2.0 authentication.

```bash
npm install express dotenv passport passport-oauth2
```

### Setting Up Passport with OAuth 2.0

1. **Configure Environment Variables**: Store client ID, client secret, and callback URL in `.env`.

```plaintext
CLIENT_ID=yourClientID
CLIENT_SECRET=yourClientSecret
CALLBACK_URL=http://localhost:3000/auth/example/callback
```

2. **Configure Passport Strategy**: This involves creating a new OAuth2 strategy with passport.

```javascript
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const dotenv = require('dotenv');
dotenv.config();

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://example.com/oauth2/authorize',
    tokenURL: 'https://example.com/oauth2/token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  (accessToken, refreshToken, profile, cb) => {
    // Here you can save or update the user information in your database
    cb(null, profile);
  }
));

app.use(passport.initialize());
```

3. **Authentication Routes**: Create routes to start the authentication process and to handle the callback.

```javascript
app.get('/auth/example',
  passport.authenticate('oauth2'));

app.get('/auth/example/callback',
  passport.authenticate('oauth2', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

### Handling User Sessions

To handle user sessions, install `express-session`.

```bash
npm install express-session
```

Configure session middleware before passport initialization in your app.

```javascript
const session = require('express-session');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
```

Implement `serializeUser` and `deserializeUser` methods.

```javascript
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Find user by id, then
  done(null, user);
});
```

### Secure Routes

Use `req.isAuthenticated()` to secure routes that require authentication.

```javascript
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    return res.send('Profile Page');
  }
  res.redirect('/login');
});
```