const mangaDb = require('../models/posts');

function create(req, res, next) {
  mangaDb.createPost(req.body)
      .then(data => {
        res.locals.post = data;
        next();
      })
      .catch(next);
}

function update(req, res, next) {
  mangaDb.updatePost(req.body)
         .then(data => {
            res.locals.anime = data;
         })
}

function getPost(req, res, next) {
  mangaDb.getPost(req.body)
    .then(data => {
      console.log('data', data)
      res.json(data);
    })
    .catch(next);
}

module.exports = {
  create,
  update,
  getPost
}
