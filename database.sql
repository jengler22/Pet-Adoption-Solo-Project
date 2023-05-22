
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pet" (
    "user_id" INT,
    "name" VARCHAR(255),
    "city" VARCHAR(255),
    "breed" VARCHAR(255),
    "photo" VARCHAR(255),
    "pet_type_id" INT,
    "category_id" INT,
    "is_lost" boolean,
    "created_at" timestamp
);

CREATE TABLE "pet_type" (
    "pet_id" INT,
    "type" VARCHAR(100)
);

CREATE TABLE "category" (
    "pet_id" INT,
    "category" VARCHAR(100)
);    
    



