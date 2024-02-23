## React Forms

Handling forms in React involves understanding the core concepts of controlled components and using state to manage form inputs. This cheat sheet provides guidance on managing form state, handling submissions, and validating input in React.

### Controlled Components

In a controlled component, form data is handled by the React component's state. Each state update triggers a re-render, keeping the input in sync with the state.

#### Basic Input Example

```javascript
import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}
```

### Handling Multiple Inputs

Use the `name` attribute of each input to update the corresponding state property dynamically.

#### Example

```javascript
import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}
```

### Handling Form Submission

Use an `onSubmit` handler in the form to process form data. Prevent the default form submission behavior to handle data within React.

#### Example

```javascript
function MyForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Validation

Form validation can be performed on each input's change or on form submission. Use state to keep track of validation errors.

#### Example

```javascript
function MyForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email address' }));
    } else {
      setErrors(prevErrors => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email);
    if (Object.keys(errors).length === 0) {
      // Submit form if no errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateEmail(email)}
      />
      {errors.email && <p>{errors.email}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Use Cases

- **Single Page Applications (SPAs)**: Handling form inputs using controlled components for a seamless user experience.
- **Dynamic Forms**: Dynamically adding or removing form inputs based on user actions or selections.
- **Validation**: Providing real-time feedback to the user by validating inputs either on change or before form submission.