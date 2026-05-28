SELECT
    e.title,
    ROUND(AVG(f.rating), 2) AS avg_rating
FROM Events e
INNER JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id, e.title
ORDER BY avg_rating DESC;
