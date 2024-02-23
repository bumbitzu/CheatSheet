## Bcrypt

Bcrypt is a password-hashing function designed to build a cryptographically secure hash of a user's password. It incorporates a salt to protect against rainbow table attacks and is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

### Installation

For Node.js, you can install Bcrypt via npm:

```bash
npm install bcryptjs
```

This installs `bcryptjs`, a pure JavaScript implementation of Bcrypt, compatible with the native `bcrypt` library but without its dependency on native C++ code.

### Basic Usage

#### Hashing a Password

Before storing a user's password, you should hash it:

```javascript
const bcrypt = require('bcryptjs');

const password = 'userPassword123';
const saltRounds = 10;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```

Or, use the auto-gen a salt and hash:

```javascript
bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```

#### Checking a Password

When a user logs in, compare the password they provide with the hash stored in your database:

```javascript
// Load hash from your password DB.
bcrypt.compare('somePassword', hash, function(err, result) {
    // result == true if the password matches, false otherwise
});
```

### Synchronous Usage

Bcrypt also offers synchronous methods, which can simplify code but may block your application's event loop if used inappropriately:

#### Hashing Synchronously

```javascript
const hash = bcrypt.hashSync('myPassword', saltRounds);
// Store hash in your password DB.
```

#### Comparing Synchronously

```javascript
const result = bcrypt.compareSync('somePassword', hash); // true or false
```

### Best Practices

- **Use Asynchronous Methods in Web Applications**: To prevent blocking the event loop, prefer using asynchronous methods in server environments.
- **Never Store Plain Text Passwords**: Always hash passwords before storing them in your database.
- **Use a Sufficiently High Salt Round**: While 10 is a common default for `saltRounds`, consider the security requirements and performance implications for your application.
- **Keep Hashing Algorithms Up-to-Date**: As new vulnerabilities are discovered and computational power increases, ensure your hashing methods remain secure by staying updated with the latest practices.

### Security Considerations

- **Salting**: Bcrypt automatically handles salt generation and storage. The salt is included in the resulting hash string, so there's no need to store it separately.
- **Upgrade Hashes Over Time**: As computational power increases, consider increasing your `saltRounds` and upgrading the stored hashes to maintain security.