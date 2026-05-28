-- Exercise 19: For completed events, show total registrations and average feedback rating
SELECT
    e.event_id,
    e.title,
    COUNT(DISTINCT rg.registration_id) AS total_registrations,
    ROUND(AVG(fb.rating), 2) AS avg_feedback_rating
FROM Events e
LEFT JOIN Registrations rg ON e.event_id = rg.event_id
LEFT JOIN Feedback fb ON e.event_id = fb.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title;
