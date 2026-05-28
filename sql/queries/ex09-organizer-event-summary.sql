-- Exercise 09: For each event organizer, show the number of events created
-- and their current status (upcoming, completed, cancelled).
-- Join Users with Events. GROUP BY organizer_id, status.
-- Include the organizer's full_name.

SELECT
    u.full_name,
    e.status,
    COUNT(*) AS event_count
FROM Users u
INNER JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.user_id, u.full_name, e.status
ORDER BY u.full_name, e.status;
