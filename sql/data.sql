INSERT INTO Users (full_name, email, city, registration_date) VALUES
('Alice Johnson', 'alice@example.com', 'New York', '2024-12-01'),
('Bob Smith', 'bob@example.com', 'Los Angeles', '2024-12-05'),
('Charlie Lee', 'charlie@example.com', 'Chicago', '2024-12-10'),
('Diana King', 'diana@example.com', 'New York', '2025-01-15'),
('Ethan Hunt', 'ethan@example.com', 'Los Angeles', '2025-02-01'),
('Fiona Green', 'fiona@example.com', 'Chicago', '2025-04-01');

INSERT INTO Events (title, description, city, start_date, end_date, status, organizer_id) VALUES
('Tech Innovators Meetup', 'A meetup for tech enthusiasts.', 'New York', '2025-06-10 10:00:00', '2025-06-10 16:00:00', 'upcoming', 1),
('AI & ML Conference', 'Conference on AI and ML advancements.', 'Chicago', '2025-05-15 09:00:00', '2025-05-15 17:00:00', 'completed', 3),
('Frontend Development Bootcamp', 'Hands-on training on frontend tech.', 'Los Angeles', '2025-07-01 10:00:00', '2025-07-03 16:00:00', 'upcoming', 2),
('Cloud Computing Workshop', 'Learn AWS and Azure basics.', 'New York', '2025-08-20 09:00:00', '2025-08-20 17:00:00', 'upcoming', 1),
('Data Science Summit', 'Advanced data science topics.', 'Chicago', '2025-09-05 10:00:00', '2025-09-05 18:00:00', 'upcoming', 3);

INSERT INTO Sessions (event_id, title, speaker_name, start_time, end_time) VALUES
(1, 'Opening Keynote', 'Dr. Tech', '2025-06-10 10:00:00', '2025-06-10 11:00:00'),
(1, 'Future of Web Dev', 'Alice Johnson', '2025-06-10 11:15:00', '2025-06-10 12:30:00'),
(2, 'AI in Healthcare', 'Charlie Lee', '2025-05-15 09:30:00', '2025-05-15 11:00:00'),
(3, 'Intro to HTML5', 'Bob Smith', '2025-07-01 10:00:00', '2025-07-01 12:00:00'),
(4, 'Cloud Fundamentals', 'Diana King', '2025-08-20 10:00:00', '2025-08-20 11:30:00'),
(4, 'AWS Deep Dive', 'Diana King', '2025-08-20 11:30:00', '2025-08-20 13:00:00'),
(5, 'Python for Data Science', 'Ethan Hunt', '2025-09-05 10:00:00', '2025-09-05 12:00:00');

INSERT INTO Registrations (user_id, event_id, registration_date) VALUES
(1, 1, '2025-05-01'),
(2, 1, '2025-05-02'),
(3, 2, '2025-04-30'),
(4, 2, '2025-04-28'),
(5, 3, '2025-06-15'),
(1, 2, '2025-04-25'),
(2, 3, '2025-06-20'),
(4, 1, '2025-05-03'),
(5, 2, '2025-04-29'),
(3, 3, '2025-06-22'),
(6, 4, '2025-08-01'),
(1, 4, '2025-08-02'),
(2, 5, '2025-08-15'),
(3, 5, '2025-08-16'),
(4, 5, '2025-08-17');

INSERT INTO Feedback (user_id, event_id, rating, comments, feedback_date) VALUES
(3, 2, 4, 'Great insights!', '2025-05-16'),
(4, 2, 5, 'Very informative.', '2025-05-16'),
(2, 1, 3, 'Could be better.', '2025-06-11'),
(1, 1, 5, 'Excellent event!', '2025-06-11'),
(5, 2, 4, 'Well organized.', '2025-05-16'),
(1, 2, 4, 'Good sessions.', '2025-05-16'),
(6, 4, 5, 'Amazing workshop!', '2025-08-20'),
(2, 3, 3, 'Decent bootcamp.', '2025-07-03'),
(3, 3, 4, 'Learned a lot.', '2025-07-03'),
(4, 3, 5, 'Very practical.', '2025-07-03'),
(2, 5, 4, 'Great content.', '2025-09-06');

INSERT INTO Resources (event_id, resource_type, resource_url, uploaded_at) VALUES
(1, 'pdf', 'https://portal.com/resources/tech_meetup_agenda.pdf', '2025-05-01 10:00:00'),
(2, 'image', 'https://portal.com/resources/ai_poster.jpg', '2025-04-20 09:00:00'),
(3, 'link', 'https://portal.com/resources/html5_docs', '2025-06-25 15:00:00'),
(4, 'pdf', 'https://portal.com/resources/cloud_handbook.pdf', '2025-08-01 10:00:00'),
(4, 'image', 'https://portal.com/resources/cloud_diagram.png', '2025-08-01 11:00:00');
