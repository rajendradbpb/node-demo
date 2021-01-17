var express = require('express');
var router = express.Router();
var usersRouter = require("./users")
var loggerRouter = require("./logger-route")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/logger', loggerRouter);
router.use('/users', usersRouter);

module.exports = router;
