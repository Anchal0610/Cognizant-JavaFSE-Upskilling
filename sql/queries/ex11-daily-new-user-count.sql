-- Exercise 11: Find the number of users who registered each day
-- in the last 7 days. Use CURDATE() and DATE_SUB with INTERVAL 7 DAY.
-- GROUP BY registration_date, ORDER BY date.

SELECT
    DATE(u.created_at) AS registration_date,
    COUNT(*) AS new_users
FROM Users u
WHERE DATE(u.created_at) >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
GROUP BY DATE(u.created_at)
ORDER BY registration_date;
