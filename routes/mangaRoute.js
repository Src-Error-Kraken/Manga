const router = require('express').Router();
const mangaController = require('../controller/mangaController');
const sendResponse = require('../controller/sendResponse');

router.route('/')
  .get(mangaController.getAll, sendResponse.sendOkResp, sendResponse.sendErrResp)
  .post(mangaController.create, sendResponse.sendOkResp, sendResponse. sendErrResp)

router.route('/:id')
  .get(mangaController.getAll, sendResponse.sendOkResp, sendResponse.sendErrResp)
  .delete(mangaController.destroy, sendResponse.sendOkResp, sendResponse.sendErrResp)
