SELECT u.full_name, e.title, e.event_date
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE e.status = 'upcoming'
ORDER BY e.event_date;
