-- Exercise 12: List the event(s) with the highest number of sessions.
-- Use GROUP BY, COUNT, then a subquery or ORDER BY LIMIT to find the max.
-- Include event title.

SELECT
    e.event_id,
    e.title,
    COUNT(*) AS session_count
FROM Events e
INNER JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(*) = (
    SELECT COUNT(*)
    FROM Sessions
    GROUP BY event_id
    ORDER BY COUNT(*) DESC
    LIMIT 1
)
ORDER BY e.title;
