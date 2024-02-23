## JSON Web Tokens (JWT)

JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. They are used in authentication and information exchange, where the claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure.

### Structure of a JWT
A JWT typically consists of three parts:
1. **Header**: Contains metadata about the type of token and the cryptographic algorithms used to secure its contents.
2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional metadata.
3. **Signature**: Ensures the token has not been altered. In the case of tokens signed with a private key, it also verifies the authenticity of the token's issuer.

#### Example JWT Header
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Example JWT Payload
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```

#### Signature
The signature is created by taking the encoded header, the encoded payload, a secret, the algorithm specified in the header (for example, HMAC SHA256), and signing it.

### Creating a JWT
To create a JWT, you need to:
1. Encode the header and payload using Base64Url.
2. Concatenate them with a period (`.`) separator.
3. Sign the resulting string using the algorithm specified in the header and the secret key.

#### Example in JavaScript
```javascript
const header = { "alg": "HS256", "typ": "JWT" };
const payload = { "sub": "1234567890", "name": "John Doe", "admin": true };
const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
const signature = createSignature(encodedHeader + "." + encodedPayload, 'your-256-bit-secret');
const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;
```

### Verifying a JWT
When you receive a JWT, you should:
1. Split the JWT to extract the Header, Payload, and Signature.
2. Verify the signature with the public key or secret key.
3. Check the claims in the payload according to your application requirements (e.g., issuer, expiration, subject).

#### Example in JavaScript
```javascript
const jwt = require('jsonwebtoken');
const token = "YOUR.JWT.TOKEN.HERE";
const secretOrPublicKey = "your-256-bit-secret";

try {
  const decoded = jwt.verify(token, secretOrPublicKey);
  console.log(decoded);
} catch(err) {
  // handle error
}
```

### Libraries and Tools
- **jsonwebtoken (Node.js)**
- **pyjwt (Python)**
- **JWT.io**: Online tool for decoding, verifying, and generating JWTs.

### Best Practices
- Use strong, unique keys for signing JWTs.
- Do not store sensitive information in JWT unless it is encrypted (JWE).
- Set an appropriate expiration time for tokens.
- Use HTTPS to prevent tokens from being intercepted during transmission.
