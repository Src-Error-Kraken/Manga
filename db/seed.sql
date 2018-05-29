\c mangaDb;

INSERT INTO users
(username, email, pw_digest)

VALUES
('Src_Error_Kraken', 'juju@gmail.com', 'jujuju')

INSERT INTO collection
(manga_id, manga_name, user_id)

VALUES
(4e70e9f6c092255ef7004336, 'Airindream', 1)

INSERT INTO posts
(post, manga_name,user_name, user_id)

VALUES
('very good read', 'Airindream', 1)
