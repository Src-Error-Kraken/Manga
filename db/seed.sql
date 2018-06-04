\c mangaDb;

INSERT INTO users
(username, email, pw_digest)

VALUES
('Src_Error_Kraken', 'juju@gmail.com', 'jujuju')

INSERT INTO collection
(manga_name, user_id)

VALUES
('Airindream', 1)

INSERT INTO posts
(post, manga_id, user_id)

VALUES
('very good read', 1, 1)
