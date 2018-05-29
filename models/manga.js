const mangaDb = require('../config/connection');


function getAll(id) {
  return mangaDb.any(`SELECT * FROM collection WHERE user_id = $1, id`);
}

function getOne(id) {
  return qp = mangaDb.one(`
    SELECT * FROM collection
    WHERE manga_id = $1
  `, id);
}

function create(manga) {
  return qp = mangaDb.one(`
    INSERT INTO collection (manga_id, manga_name, user_id)
    VALUES ($/manga_id/, $/manga_name/, $/user_id/)
    RETURNING *
  `, manga);
}

function destroy(id) {
  return queryPromise = mangaDb.non(`
    DELETE FROM collection WHERE manga_id = $1
  `, id);
}

module.exports = {
  getAll,
  getOne,
  create,
  destroy
};

