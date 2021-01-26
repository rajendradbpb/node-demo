var express = require('express');
var router = express.Router();
var usersRouter = require("./users");
var loggerRouter = require("./logger-route");
var promiseRouter = require("./promise-route");
var dbConnRouter = require("./db-conn");
var errorRoutes = require("./error-route");
var mailRoutes = require("./mail-routes");
var configRoutes = require("./config");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/logger', loggerRouter);
router.use('/promise', promiseRouter);
router.use('/users', usersRouter);
router.use('/db', dbConnRouter);
router.use('/error', errorRoutes);
router.use('/mail', mailRoutes);
router.use('/config', configRoutes);

module.exports = router;
