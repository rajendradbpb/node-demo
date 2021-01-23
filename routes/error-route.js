var express = require('express');
var app = express();
var router = express.Router();
var customError = require("./../errors/custom-error")
/* GET users listing. */
router.get('/built-in', function(req, res, next) {
  next(new Error("Built in error in routes"));
});
router.get('/bad-request', function(req, res, next) {
  next(new customError.BadRequest("Bad request given"));
});
router.get('/server', function(req, res, next) {
  next(new customError.InternalServerError("Bad request given"));
});



module.exports = router;
