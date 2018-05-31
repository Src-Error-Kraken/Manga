\c mangaDb;

DROP TABLE IF EXISTS collection;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

  CREATE TABLE  users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    pw_digest VARCHAR(255)
);

  CREATE TABLE collection(
 id SERIAL PRIMARY KEY,\
 manga_name VARCHAR(255),
 user_id INT REFERENCES users(id)
);


  CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post VARCHAR(255),
    manga_id INT REFERENCES collection(id),
    user_id INT REFERENCES users(id)
)
