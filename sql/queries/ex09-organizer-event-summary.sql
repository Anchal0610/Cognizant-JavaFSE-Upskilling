SELECT
    e.status,
    COUNT(*) AS event_count
FROM Events e
GROUP BY e.status
ORDER BY e.status;
