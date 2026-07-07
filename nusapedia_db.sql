CREATE DATABASE IF NOT EXISTS nusapedia_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE nusapedia_db;

CREATE TABLE IF NOT EXISTS users (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    email       VARCHAR(100) NOT NULL,
    password    VARCHAR(255) NOT NULL,
    avatar      VARCHAR(255) DEFAULT NULL,
    role        ENUM('user','admin') NOT NULL DEFAULT 'user',
    join_date   DATE NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS quiz_scores (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    user_id     INT NOT NULL,
    score       INT NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;