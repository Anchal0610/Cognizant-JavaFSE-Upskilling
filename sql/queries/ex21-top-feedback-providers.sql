-- Exercise 21: List top 5 users who have submitted the most feedback entries
SELECT
    u.user_id,
    u.full_name,
    COUNT(fb.feedback_id) AS feedback_count
FROM Users u
JOIN Feedback fb ON u.user_id = fb.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_count DESC
LIMIT 5;
