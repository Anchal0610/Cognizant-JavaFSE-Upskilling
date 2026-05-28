SELECT u.full_name, COUNT(DISTINCT r.event_id) AS events_registered
FROM Registrations r
JOIN Users u ON r.user_id = u.user_id
GROUP BY u.user_id, u.full_name
ORDER BY events_registered DESC
LIMIT 5;
