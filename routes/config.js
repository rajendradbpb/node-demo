var express = require('express');
const fs = require('fs');
var router = express.Router();
const result = require('dotenv').config();
const dotenv = require('dotenv');
var convict = require('convict');

// check loading of .env
if (result.error) {
    throw result.error
}
else {
    console.log("Loaded .env  ");
}
/* GET users listing. */
router.get('/dotEnv', function (req, res, next) {
    console.log(process.env.DB_HOST);
    res.send('use of .env file in log -> reading value DB_HOST =' + process.env.DB_HOST);
});
router.get('/dotEnv/override', function (req, res, next) {
    const envConfig = dotenv.parse(fs.readFileSync('.env.override'))
    for (const k in envConfig) {
         console.log(envConfig[k]); 
    }
});

module.exports = router;
