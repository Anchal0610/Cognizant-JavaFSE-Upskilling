-- Exercise 23: Show month-wise registration count trend over the past 12 months
SELECT
    DATE_FORMAT(r.registration_date, '%Y-%m') AS month,
    COUNT(*) AS registration_count
FROM Registrations r
WHERE r.registration_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
GROUP BY DATE_FORMAT(r.registration_date, '%Y-%m')
ORDER BY month;
