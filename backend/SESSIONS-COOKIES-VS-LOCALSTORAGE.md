## Sessions & Cookies vs. localStorage

Understanding the differences between sessions & cookies and localStorage is crucial for web developers to manage data effectively in web applications. Here's a cheat sheet highlighting key aspects, use cases, and code examples.

### Sessions & Cookies

#### Key Points
- **Storage Location**: Server-side for sessions, client-side for cookies.
- **Lifetime**: Controlled by the server for sessions; cookies can have a set expiration time.
- **Accessibility**: Limited to server for session data; cookies are sent with every HTTP request to the domain that set them.
- **Use Cases**: Authentication, tracking user state across requests.

#### Code Example
```javascript
// Setting a cookie in JavaScript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

// Reading cookies in JavaScript
let x = document.cookie;
```

### localStorage

#### Key Points
- **Storage Location**: Client-side.
- **Lifetime**: Persists until explicitly cleared, survives browser restarts.
- **Accessibility**: Accessible only by client-side scripts, not sent to the server.
- **Storage Capacity**: Up to 5MB per domain (more than cookies).
- **Use Cases**: Storing preferences, interface state, and other non-sensitive data that doesn't need to be sent to the server.

#### Code Example
```javascript
// Setting an item in localStorage
localStorage.setItem('key', 'value');

// Getting an item from localStorage
let value = localStorage.getItem('key');

// Removing an item from localStorage
localStorage.removeItem('key');

// Clearing all items from localStorage
localStorage.clear();
```

### Comparison

<table>
<thead>
<tr>
<th>Feature</th>
<th>Cookies</th>
<th>localStorage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Data Lifespan</td>
<td>Configurable, but sent with every request</td>
<td>Only cleared via script or clearing browser data</td>
</tr>
<tr>
<td>Data Storage Location</td>
<td>Client-side, but sent to server with every request</td>
<td>Client-side</td>
</tr>
<tr>
<td>Capacity</td>
<td>~4KB per cookie</td>
<td>Up to 5-10MB per domain</td>
</tr>
<tr>
<td>Accessibility</td>
<td>Both client and server</td>
<td>Only client-side</td>
</tr>
<tr>
<td>Use Case</td>
<td>Session management, personalization</td>
<td>Local data storage without server interaction</td>
</tr>
</tbody>
</table>


Cookies are suitable for tracking sessions and user-specific data that the server needs to know about on each request. localStorage is better for storing larger amounts of data that do not need to be sent with every server request, making it ideal for client-side preferences or application state.

Always consider security and privacy implications when choosing between these storage options, especially for sensitive information.