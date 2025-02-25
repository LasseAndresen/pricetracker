create table Listings (
    ID SERIAL PRIMARY KEY,
    EXTERNALID VARCHAR(255) NOT NULL,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    PriceDKK INTEGER NOT NULL,
    ImageURL TEXT NOT NULL,
    Location TEXT NOT NULL,
    Available BOOLEAN NOT NULL DEFAULT TRUE,
    DateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)