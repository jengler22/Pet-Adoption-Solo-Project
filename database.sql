
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
      "date" DATE NOT NULL,
      "location" VARCHAR (150) NOT NULL,
      "description" VARCHAR (1000) NOT NULL,
      "picture" Varchar (100)
);

INSERT INTO "lost_found"("date", "location", "description", "picture")
VALUES ('5/13/23', 'Lindstrom MN', 'Black and White male cat found hiding under my back deck. very friendly. Located on South end of Lindstrom. please call 555-555-5555 if youre missing this lovable boy!', 'images/lostpet1.jpg');



INSERT INTO "pet_type" ("type")
    Values ('Cat'), ('Dog');




INSERT INTO "pet" ("name", "location", "breed", "photo", "description", "pet_type_id")
   VALUES ('Grace', 'Apple Valley,MN', 'RagDoll', 'images/cat2.jpg', 'Meet Grace! This sweet, 6 year old girl enjoys human companionship. She loves being petted and frequently jumps onto her foster moms lap. Grace also enjoys being brushed and combed and does well with kiddos. She doesnt mind calmer dogs but can be picky with her cat friends. She would enjoy being the only cat in the home but has shown with time she can tolerate another well-mannered friendly cat. She is spayed, and vaccinations are up to date. 
To meet Grace please call 555-555-5555', 1);

('Teddy', 'Blaine,MN', 'Shorthair Tabby', 'images/cat1.jpg', 'This is Teddy, and he is a very friendly and sweet 2 year old cat. He made fast friends with his roommates and enjoys feline companionship very much. He also enjoys human companionship, so hes the best of both worlds! Vaccinations are up to date, and he is neutered. If you’re interested in getting to know Teddy, call 555-555-5555.', 1);





