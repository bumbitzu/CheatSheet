## The Most Important SQL Commands

SQL commands are instructions used to communicate with a database to perform tasks, operations, and queries. Here is a concise overview of the most crucial SQL commands categorized by their purpose:

### Data Definition Language (DDL)

- **CREATE DATABASE**: Creates a new database.
  ```sql
  CREATE DATABASE database_name;
  ```
- **DROP DATABASE**: Deletes a database.
  ```sql
  DROP DATABASE database_name;
  ```
- **CREATE TABLE**: Creates a new table in the database.
  ```sql
  CREATE TABLE table_name (
      column1 datatype constraint,
      column2 datatype constraint,
      ...
  );
  ```
- **DROP TABLE**: Deletes a table.
  ```sql
  DROP TABLE table_name;
  ```
- **ALTER TABLE**: Modifies an existing table structure (e.g., adding or dropping columns).
  ```sql
  ALTER TABLE table_name ADD column_name datatype;
  ALTER TABLE table_name DROP COLUMN column_name;
  ```
- **CREATE INDEX**: Creates an index on a table column.
  ```sql
  CREATE INDEX index_name ON table_name (column_name);
  ```

### Data Manipulation Language (DML)

- **SELECT**: Retrieves data from a database.
  ```sql
  SELECT column_names FROM table_name WHERE condition;
  ```
- **INSERT INTO**: Inserts new data into a table.
  ```sql
  INSERT INTO table_name (column1, column2) VALUES (value1, value2);
  ```
- **UPDATE**: Modifies existing data in a table.
  ```sql
  UPDATE table_name SET column1 = value1 WHERE condition;
  ```
- **DELETE**: Deletes data from a table.
  ```sql
  DELETE FROM table_name WHERE condition;
  ```

### Data Control Language (DCL)

- **GRANT**: Gives users access privileges to the database.
  ```sql
  GRANT privilege_name ON database_name.table_name TO 'username'@'host';
  ```
- **REVOKE**: Removes access privileges from a user.
  ```sql
  REVOKE privilege_name ON database_name.table_name FROM 'username'@'host';
  ```

### Transaction Control Language (TCL)

- **COMMIT**: Commits a transaction, making all changes permanent.
  ```sql
  COMMIT;
  ```
- **ROLLBACK**: Rolls back a transaction, undoing changes.
  ```sql
  ROLLBACK;
  ```
- **SAVEPOINT**: Sets a savepoint within a transaction.
  ```sql
  SAVEPOINT savepoint_name;
  ```
- **ROLLBACK TO SAVEPOINT**: Rolls back to a specific savepoint without terminating the transaction.
  ```sql
  ROLLBACK TO savepoint_name;
  ```