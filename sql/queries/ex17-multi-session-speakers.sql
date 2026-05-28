-- Exercise 17: Identify speakers handling more than one session across all events
SELECT
    s.speaker_name,
    COUNT(s.session_id) AS session_count
FROM Sessions s
GROUP BY s.speaker_name
HAVING COUNT(s.session_id) > 1;
