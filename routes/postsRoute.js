const router = require('express').Router();
const postsController = require('../controllers/postsController');
const sendResponse = require('../controllers/sendResponse');

router.route('/')
  .get(postsController.getPost, sendResponse.sendOkResp, sendResponse.sendErrResp)
  .post(postsController.create, sendResponse.sendOkResp, sendResponse.sendErrResp)

router.route('/userpost')
  .get(postsController.getPost, sendResponse.sendOkResp, sendResponse.sendErrResp)
  .post(postsController.create, sendResponse.sendOkResp, sendResponse.sendErrResp)
  .put(postsController.update, sendResponse.sendOkResp, sendResponse.sendErrResp)

  module.exports = router;

