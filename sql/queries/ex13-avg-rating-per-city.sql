-- Exercise 13: Calculate the average feedback rating of events conducted
-- in each city. Join Events with Feedback. GROUP BY city.
-- Round the average to 2 decimal places.

SELECT
    e.city,
    ROUND(AVG(f.rating), 2) AS avg_rating
FROM Events e
INNER JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.city
ORDER BY avg_rating DESC;
