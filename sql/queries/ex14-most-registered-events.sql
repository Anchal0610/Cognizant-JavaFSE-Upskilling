-- Exercise 14: List top 3 events based on the total number of
-- user registrations. Join Events with Registrations.
-- GROUP BY event_id, COUNT, ORDER BY DESC, LIMIT 3.

SELECT
    e.event_id,
    e.title,
    COUNT(r.registration_id) AS total_registrations
FROM Events e
INNER JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title
ORDER BY total_registrations DESC
LIMIT 3;
