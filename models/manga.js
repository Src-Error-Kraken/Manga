const mangaDb = require('../config/connection');


function getAll() {
  return mangaDb.any(`SELECT * FROM collection`);
}

function getOne(id) {
  return qp = mangaDb.one(`
    SELECT * FROM collection
    WHERE id = $1
  `, id);
}

function create(manga) {
  return qp = mangaDb.one(`
    INSERT INTO collection (manga_name, user_id)
    VALUES ($/manga_name/, $/user_id/)
    RETURNING *
  `, manga);
}

function destroy(id) {
  return queryPromise = mangaDb.none(`
    DELETE FROM collection WHERE id = $1
  `, id);
}

module.exports = {
  getAll,
  getOne,
  create,
  destroy
};

