-- Exercise 16: Find users who created an account in the last 30 days
-- but haven't registered for any events.
-- Use DATE_SUB with CURDATE() and LEFT JOIN with Registrations
-- WHERE registration_id IS NULL.

SELECT
    u.user_id,
    u.full_name,
    u.email,
    u.created_at
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
WHERE u.created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
  AND r.registration_id IS NULL
ORDER BY u.created_at DESC;
