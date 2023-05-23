
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pet_type" (
    "pet_id" SERIAL PRIMARY KEY,
    "type" VARCHAR(100)
);

    
CREATE TABLE "pet" (
    "user_id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255),
    "location" Varchar (255),
    "breed" VARCHAR(255),
    "photo" VARCHAR(255),
    "description" VARCHAR(1000),
    "pet_type_id" INT REFERENCES "pet_type"
    
);

CREATE TABLE "lost_found" (
      "id" SERIAL PRIMARY KEY,
      "date" INT NOT NULL,
      "location" VARCHAR (150) NOT NULL,
      "description" VARCHAR (1000) NOT NULL,
      "picture" Varchar (100)
);




