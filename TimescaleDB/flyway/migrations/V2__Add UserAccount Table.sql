create table UserAccount (
    ID SERIAL PRIMARY KEY,
    FirstName TEXT NULL,
    LastName TEXT NULL,
    Email TEXT UNIQUE NOT NULL,
    Picture TEXT NULL,
    GoogleID TEXT NULL,
    DateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastLogin TIMESTAMP DEFAULT NULL,
    IsActive BOOLEAN DEFAULT TRUE,
    IsAdmin BOOLEAN DEFAULT FALSE
)
