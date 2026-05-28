-- Exercise 10: Identify events that had registrations but received no feedback
-- at all. Use LEFT JOIN from Events to Feedback where feedback_id IS NULL,
-- but ensure the event has at least one registration (INNER JOIN with Registrations).

SELECT DISTINCT
    e.event_id,
    e.title,
    e.event_date
FROM Events e
INNER JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE f.feedback_id IS NULL
ORDER BY e.event_date;
