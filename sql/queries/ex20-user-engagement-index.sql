-- Exercise 20: For each user, calculate events registered for and feedbacks submitted
SELECT
    u.user_id,
    u.full_name,
    COALESCE(reg.registration_count, 0) AS registration_count,
    COALESCE(fb.feedback_count, 0) AS feedback_count
FROM Users u
LEFT JOIN (
    SELECT user_id, COUNT(*) AS registration_count
    FROM Registrations
    GROUP BY user_id
) reg ON u.user_id = reg.user_id
LEFT JOIN (
    SELECT user_id, COUNT(*) AS feedback_count
    FROM Feedback
    GROUP BY user_id
) fb ON u.user_id = fb.user_id
ORDER BY reg.registration_count DESC;
