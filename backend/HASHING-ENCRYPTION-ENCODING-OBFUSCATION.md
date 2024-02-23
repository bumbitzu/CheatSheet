## Hashing vs. Encryption vs. Encoding vs. Obfuscation Cheat Sheet

Understanding the differences between hashing, encryption, encoding, and obfuscation is crucial in cybersecurity, data protection, and application development. Here's a concise guide to these concepts:

### Hashing

- **Purpose**: To create a unique, fixed-size string (a hash) from input data of any size. Hashing is one-way, meaning you cannot retrieve the original input from the hash.
- **Use Cases**: Password storage, data integrity verification, and digital signatures.
- **Characteristics**:
  - One-way function: Irreversible.
  - Deterministic: Same input always produces the same output.
  - Collision-resistant: Hard to find two different inputs with the same output.
- **Example Algorithms**: SHA-256, MD5 (not recommended for security-critical applications).

### Encryption

- **Purpose**: To transform data into a secure format that can only be read or processed after decryption with the correct key.
- **Use Cases**: Secure data transmission, data at rest security, and ensuring data privacy.
- **Characteristics**:
  - Two-way function: Encrypted data can be decrypted.
  - Requires keys for encryption and decryption.
  - Supports confidentiality.
- **Types**:
  - Symmetric Encryption: Uses the same key for encryption and decryption (e.g., AES).
  - Asymmetric Encryption: Uses a public key for encryption and a private key for decryption (e.g., RSA).

### Encoding

- **Purpose**: To transform data into a different format using a scheme that is reversible (can be decoded).
- **Use Cases**: Data interoperability, data storage, and transmission in specific formats.
- **Characteristics**:
  - Reversible: Encoded data can be easily transformed back to its original form.
  - Not for security purposes but for compatibility and data integrity.
- **Example Methods**: Base64, URL encoding, UTF-8.

### Obfuscation

- **Purpose**: To make something difficult to understand or interpret, often used to protect source code from being easily readable.
- **Use Cases**: Software protection, intellectual property protection, and reducing the risk of reverse engineering.
- **Characteristics**:
  - Makes code/data harder to understand but can be reversed by determined attackers.
  - Does not inherently secure data but adds a layer of complexity.
- **Techniques**: Variable name changes, inserting dead code, and logic obfuscation.

### Key Differences

- **Security**: Encryption provides confidentiality and, with the use of digital signatures, integrity and authenticity. Hashing provides integrity. Encoding is not for security. Obfuscation provides a deterrent rather than true security.
- **Reversibility**: Encryption is reversible with the correct key; hashing is not reversible. Encoding is easily reversible, and obfuscation is designed to be reversible only with effort or specific knowledge.
- **Purpose**: Encryption and hashing are used for security. Encoding is for data integrity and interoperability. Obfuscation is for making code/data less intelligible.

Understanding these concepts helps in choosing the right technique for data protection, transmission, and storage requirements, ensuring the security and integrity of information in various contexts.