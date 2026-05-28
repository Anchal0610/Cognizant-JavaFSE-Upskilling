SELECT e.event_id, e.title, COUNT(s.session_id) AS morning_sessions
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
WHERE HOUR(s.start_time) >= 10 AND HOUR(s.start_time) < 12
GROUP BY e.event_id, e.title;
