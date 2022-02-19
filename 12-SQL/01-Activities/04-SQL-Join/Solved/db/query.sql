-- INNER JOIN
SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
JOIN prices ON books.price = prices.id;

-- LEFT JOIN
SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
LEFT JOIN prices ON books.price = prices.id;

-- RIGHT JOIN
SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
RIGHT JOIN prices ON books.price = prices.id;

-- FULL OUTER JOIN
-- MySQL doesn't do this natively
SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
RIGHT JOIN prices ON books.price = prices.id
UNION
SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
LEFT JOIN prices ON books.price = prices.id

-- What is the total price for all books?
SELECT
SUM(prices.price) AS total
FROM books
JOIN prices ON books.price = prices.id;

-- How many individual prices are there?
SELECT COUNT(*) AS total FROM prices;
