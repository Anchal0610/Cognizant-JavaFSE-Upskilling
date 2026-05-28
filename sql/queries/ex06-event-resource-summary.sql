SELECT e.title,
       COUNT(CASE WHEN r.resource_name LIKE '%.pdf' THEN 1 END) AS pdf_count,
       COUNT(CASE WHEN r.resource_name LIKE '%.zip' THEN 1 END) AS zip_count,
       COUNT(CASE WHEN r.resource_name LIKE '%.csv' THEN 1 END) AS csv_count,
       COUNT(r.resource_id) AS total_resources
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title;
