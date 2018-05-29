DROP TABLE IF EXISTS collection;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

  CREATE TABLE  users(
      id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    pw_digest VARCHAR
);

  CREATE TABLE collection(
 id SERIAL PRIMARY KEY,
 manga_id INT NOT NULL,
 manga_name TEXT,
 user_id INT REFERENCES users(id)
);


  CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    review TEXT,
    manga_name VARCHAR,
    user_name VARCHAR,
    user_id INT REFERENCES users(id)
)
