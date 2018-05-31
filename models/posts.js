const mangaDb = require('../config/connection');

function getPost(post) {
  console.log('posty', post)
  return mangaDb.any(`SELECT * FROM posts`);
}

function getOne(id) {
  return qp = mangaDb.one(`
    SELECT * FROM posts
    WHERE id = $1
  `, id);
}

function createPost(post) {
  return qp = mangaDb.one(`
    INSERT INTO posts (post, manga_id, user_id)
    VALUES ($/post/, $/manga_id/, $/user_id/)
    RETURNING *
    `, post);
}

function updatePost(post) {
  return qp = mangaDb.any(`UPDATE posts SET post = $/post/ WHERE manga_id = $/manga_id/ AND user_id = $/user_id/
    RETURNING *`, post);
}

function destroyPost(id) {
  return queryPromise = mangaDb.none(`
      DELETE FROM posts WHERE id = $1
  `, id)
}

module.exports = {
  createPost,
  getPost,
  getOne,
  updatePost,
  destroyPost
}
