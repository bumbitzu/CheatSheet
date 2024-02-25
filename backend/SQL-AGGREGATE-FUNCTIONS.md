## SQL Aggregate Functions

SQL aggregate functions perform a calculation on a set of values and return a single value. They are commonly used with the `GROUP BY` clause to group rows that have the same values in specified columns into summary rows.

### 1. `COUNT()`

Counts the number of rows in a dataset, including duplicates and rows with `NULL` values if specified explicitly.

```sql
-- Count all rows in a table
SELECT COUNT(*) FROM table_name;

-- Count rows in a specific column (excludes NULL values)
SELECT COUNT(column_name) FROM table_name;
```

### 2. `SUM()`

Calculates the sum of a numeric column.

```sql
SELECT SUM(column_name) FROM table_name;
```

### 3. `MAX()` / `MIN()`

Determines the maximum or minimum value in a column.

```sql
-- Maximum value
SELECT MAX(column_name) FROM table_name;

-- Minimum value
SELECT MIN(column_name) FROM table_name;
```

### 4. `AVG()`

Calculates the average value of a numeric column.

```sql
SELECT AVG(column_name) FROM table_name;
```

### 5. `ROUND()`

Rounds a numeric field to the number of decimals specified.

```sql
-- Round to 2 decimal places
SELECT ROUND(column_name, 2) FROM table_name;
```

### 6. `GROUP BY`

Groups rows that have the same values in specified columns into summary rows, like "find the number of customers in each country".

```sql
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name;
```

### 7. `HAVING`

Used with `GROUP BY` to restrict the groups of returned rows to those that satisfy a specified condition, essentially a filter for aggregated results.

```sql
-- Having clause example
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name
HAVING COUNT(*) > 5;
```

**Note:** While `WHERE` filters rows before aggregation, `HAVING` filters groups after aggregation.