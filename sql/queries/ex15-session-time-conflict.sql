-- Exercise 15: Identify overlapping sessions within the same event
-- (i.e., session start and end times that conflict).
-- Use a self-join on Sessions table where s1.event_id = s2.event_id
-- and s1.session_id != s2.session_id, and check for overlap:
-- s1.start_time < s2.end_time AND s1.end_time > s2.start_time.

SELECT
    s1.session_id AS session_1_id,
    s1.title AS session_1_title,
    s2.session_id AS session_2_id,
    s2.title AS session_2_title,
    s1.event_id
FROM Sessions s1
INNER JOIN Sessions s2
    ON s1.event_id = s2.event_id
    AND s1.session_id < s2.session_id
WHERE s1.start_time < s2.end_time
  AND s1.end_time > s2.start_time
ORDER BY s1.event_id, s1.start_time;
