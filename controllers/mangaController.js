const mangaDb = require('../models/manga');

function getAll(req, res, next) {
  mangaDb.getAll(req.params.id)
         .then(data => {
            console.log(req.params.id,'controllers')

               res.locals.mangas = data;
               next();
         })
         .catch(next);
}

function create(req, res, next) {
  mangaDb.create(req.body)
         .then(data => {
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


module.exports = {
  getAll,
  create,
  destroy
}
