## SQL Queries

### SELECT
Used to select data from a database. The data returned is stored in a result table, known as the result-set.

#### Syntax
```sql
SELECT column1, column2, ...
FROM table_name;
```
- Selects `column1`, `column2` from `table_name`.

#### Example
```sql
SELECT FirstName, LastName FROM Customers;
```
- Retrieves first and last names from the `Customers` table.

### AS
Used to rename a column or table with an alias.

#### Syntax
```sql
SELECT column_name AS alias_name
FROM table_name;
```
- Renames `column_name` to `alias_name` in the result-set.

#### Example
```sql
SELECT CustomerID AS ID, CustomerName AS Customer FROM Customers;
```
- Renames `CustomerID` to `ID` and `CustomerName` to `Customer` in the output.

### DISTINCT
Removes duplicate values from a result set.

#### Syntax
```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```
- Selects unique values from specified columns.

#### Example
```sql
SELECT DISTINCT Country FROM Customers;
```
- Retrieves unique country names from the `Customers` table.

### WHERE
Used to filter records.

#### Syntax
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
- Selects columns where the condition is true.

#### Example
```sql
SELECT * FROM Customers
WHERE Country='Mexico';
```
- Retrieves all records from `Customers` where the `Country` is 'Mexico'.

### LIKE
Used in a WHERE clause to search for a specified pattern in a column.

#### Syntax
```sql
SELECT column1, column2, ...
FROM table_name
WHERE column_name LIKE pattern;
```
- `%` represents zero, one, or multiple characters
- `_` represents a single character

#### Example
```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';
```
- Retrieves records where `CustomerName` starts with 'a'.

### AND, OR
Used to filter records based on more than one condition.

#### Syntax
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2;
```
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2;
```
- `AND` combines conditions that must both be true.
- `OR` combines conditions where at least one must be true.

#### Example
```sql
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';
```
- Retrieves records from `Customers` where the `Country` is 'Germany' and the `City` is 'Berlin'.

### ORDER BY
Used to sort the result set in ascending or descending order.

#### Syntax
```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```
- `ASC` is the default sort order (ascending).
- `DESC` specifies a descending order.

#### Example
```sql
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;
```
- Sorts the result by `Country` in ascending order, then `CustomerName` in descending order.

### LIMIT
Used to specify the maximum number of records to return.

#### Syntax
```sql
SELECT column1, column2, ...
FROM table_name
LIMIT number;
```
#### Example
```sql
SELECT * FROM Customers
LIMIT 5;
```
- Retrieves the first 5 records from the `Customers` table.

### CASE
Used to create conditional logic within a SQL query.

#### Syntax
```sql
SELECT column_name,
CASE 
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE resultN
END AS alias_name
FROM table_name;
```
#### Example
```sql
SELECT CustomerName, 
CASE 
    WHEN Country = 'Mexico' THEN 'Domestic'
    ELSE 'International'
END AS CustomerType
FROM Customers;
```
- Assigns 'Domestic' to customers from Mexico and 'International' to all others, creating a new column `CustomerType` in the result set.