const mangaDb = require('../models/manga');

function getAll(req, res, next) {
  console.log(req.params.id,'controller')
  mangaDb.getAll(req.params.id)
         .then(data => {
               res.locals.mangas = data;
               next();
         })
         .catch(next);
}

function create(req, res, next) {
  mangaDb.create(req.body)
         .then(data => {
               .then(data {
                     res.locals.manga = data;
                     next();
               })
               .catch(next);
}

function destroy(req, res, next) {
  mangaDb.destroy(req.params.id)
         .then(() => {
              next()
         })
         .catch(next);
}
