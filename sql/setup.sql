-- ============================================================
-- Community Events Database - Full Setup
-- ============================================================

CREATE DATABASE IF NOT EXISTS community_events;
USE community_events;

-- Drop tables in reverse dependency order
DROP TABLE IF EXISTS Feedback;
DROP TABLE IF EXISTS Registrations;
DROP TABLE IF EXISTS Resources;
DROP TABLE IF EXISTS Sessions;
DROP TABLE IF EXISTS Events;
DROP TABLE IF EXISTS Users;

-- ============================================================
-- CREATE TABLES
-- ============================================================

CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'upcoming',
    event_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    speaker_name VARCHAR(100) NOT NULL,
    start_time DATETIME,
    end_time DATETIME,
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Resources (
    resource_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    resource_name VARCHAR(200) NOT NULL,
    file_path VARCHAR(500),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Registrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    rating DECIMAL(2,1),
    comments TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

-- ============================================================
-- INSERT DATA
-- ============================================================

-- Users
INSERT INTO Users (full_name, email) VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Carol Davis', 'carol@example.com'),
('David Wilson', 'david@example.com'),
('Eve Martin', 'eve@example.com'),
('Frank Lee', 'frank@example.com'),
('Grace Kim', 'grace@example.com'),
('Henry Brown', 'henry@example.com'),
('Ivy Chen', 'ivy@example.com'),
('Jack Taylor', 'jack@example.com');

-- Events
INSERT INTO Events (title, description, status, event_date) VALUES
('Tech Summit 2025', 'Annual technology conference', 'completed', '2025-03-15'),
('Data Science Workshop', 'Hands-on data science session', 'completed', '2025-04-20'),
('Cloud Computing Expo', 'Cloud technologies showcase', 'completed', '2025-05-10'),
('Cybersecurity Forum', 'Security best practices', 'upcoming', '2025-09-01'),
('AI & ML Conference', 'Artificial intelligence trends', 'upcoming', '2025-10-15');

-- Sessions
INSERT INTO Sessions (event_id, title, speaker_name, start_time, end_time) VALUES
(1, 'Keynote: Future of Tech', 'Dr. Sarah Connor', '2025-03-15 09:00:00', '2025-03-15 10:00:00'),
(1, 'Web Development Trends', 'John Doe', '2025-03-15 10:30:00', '2025-03-15 11:30:00'),
(1, 'DevOps Best Practices', 'Dr. Sarah Connor', '2025-03-15 13:00:00', '2025-03-15 14:00:00'),
(2, 'Python for Data Science', 'Jane Roe', '2025-04-20 10:00:00', '2025-04-20 12:00:00'),
(2, 'Data Visualization', 'Jane Roe', '2025-04-20 13:00:00', '2025-04-20 14:30:00'),
(3, 'AWS Fundamentals', 'Mike Chen', '2025-05-10 09:00:00', '2025-05-10 10:30:00'),
(3, 'Azure vs GCP', 'Lisa Wang', '2025-05-10 11:00:00', '2025-05-10 12:00:00'),
(4, 'Threat Detection', 'Tom Hardy', '2025-09-01 10:00:00', '2025-09-01 11:00:00'),
(5, 'ML in Production', 'Nina Patel', '2025-10-15 09:00:00', '2025-10-15 11:00:00');

-- Resources
INSERT INTO Resources (event_id, resource_name, file_path) VALUES
(1, 'Slides.pdf', '/resources/slides.pdf'),
(2, 'Notebooks.zip', '/resources/notebooks.zip'),
(2, 'Dataset.csv', '/resources/dataset.csv');

-- Registrations
INSERT INTO Registrations (user_id, event_id, registration_date) VALUES
(1, 1, '2025-02-01 10:00:00'),
(2, 1, '2025-02-02 11:00:00'),
(3, 1, '2025-02-03 12:00:00'),
(4, 1, '2025-02-04 13:00:00'),
(1, 2, '2025-03-01 10:00:00'),
(2, 2, '2025-03-02 11:00:00'),
(5, 2, '2025-03-03 12:00:00'),
(6, 2, '2025-03-04 13:00:00'),
(1, 3, '2025-04-01 10:00:00'),
(3, 3, '2025-04-02 11:00:00'),
(7, 3, '2025-04-03 12:00:00'),
(8, 3, '2025-04-04 13:00:00'),
(5, 4, '2025-08-01 10:00:00'),
(6, 4, '2025-08-02 11:00:00'),
(9, 5, '2025-09-01 10:00:00'),
(10, 5, '2025-09-02 11:00:00');

-- Feedback
INSERT INTO Feedback (user_id, event_id, rating, comments) VALUES
(1, 1, 4.5, 'Great event!'),
(2, 1, 4.0, 'Very informative'),
(3, 1, 5.0, 'Excellent speakers'),
(4, 1, 3.5, 'Good but room for improvement'),
(1, 2, 5.0, 'Loved the workshop'),
(2, 2, 4.5, 'Very practical'),
(5, 2, 4.0, 'Well organized'),
(6, 2, 3.0, 'Could be better'),
(1, 3, 4.0, 'Nice expo'),
(3, 3, 5.0, 'Amazing!');
-- ============================================================
-- Run queries from the queries/ folder to test each exercise
-- ============================================================
