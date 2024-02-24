## Create and Manipulate Databases in SQL

### Creating a Database
```sql
CREATE DATABASE database_name;
```

### Deleting a Database
```sql
DROP DATABASE database_name;
```

### Creating a Table
```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    column3 datatype constraints,
    ...
);
```
- **datatype**: Data type of the column (e.g., `VARCHAR`, `INT`, `DATE`).
- **constraints**: Rules applied to the data (e.g., `NOT NULL`, `UNIQUE`, `PRIMARY KEY`).

### Deleting a Table
```sql
DROP TABLE table_name;
```

### Inserting Data
```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

### Updating Data
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### Deleting Data
```sql
DELETE FROM table_name
WHERE condition;
```

### Selecting Data
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column ASC|DESC;
```
- `ORDER BY`: Optional, sorts the result.
- `ASC`: Ascending order (default).
- `DESC`: Descending order.

### Joining Tables
#### INNER JOIN
```sql
SELECT columns
FROM table1
INNER JOIN table2
ON table1.common_column = table2.common_column;
```
#### LEFT JOIN
```sql
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.common_column = table2.common_column;
```
#### RIGHT JOIN
```sql
SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.common_column = table2.common_column;
```

### Aggregating Data
```sql
SELECT AGGREGATE_FUNCTION(column)
FROM table
WHERE condition
GROUP BY column;
```
- **AGGREGATE_FUNCTION**: `COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`.

### Creating Indexes
```sql
CREATE INDEX index_name
ON table_name (column_name);
```

### Deleting Indexes
```sql
DROP INDEX index_name ON table_name;
```