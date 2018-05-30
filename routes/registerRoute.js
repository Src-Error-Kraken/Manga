const router = require('express').Router();

const regisController = require('../controllers/regisController');

router.route('/')
    .get(regisController.restrict, (req, res) => res.json({
        user: res.locals.user
    }))

router.route('/register')
    .post(regisController.register)
router.route('/login')
    .post(regisController.login)


module.exports = router;
