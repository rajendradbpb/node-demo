var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Invalid request');
});
router.get('/conn', function (req, res, next) {
  // getting-started.js
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/config', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("we are connected !");
    res.send("ok")
  });
});
router.get('/atlas', function (req, res, next) {

  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://admin:admin@cluster0.f9vif.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    if (err) {
      console.log("Error in atlas connection");
      res.send("error")
    }
    else {
      console.log("sucess in atlas connection");
      res.send("ok")
    }


  });

});
router.get('/mongoose/atlas', function (req, res, next) {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb+srv://admin:admin@cluster0.f9vif.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("we are connected !");
    res.send("ok")
  });



});

module.exports = router;
