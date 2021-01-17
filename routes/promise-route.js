var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Invalid input');
});
router.get('/promise/:data', function (req, res, next) {
    examplePromise(req.params.data) // passing flag from cmd
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
    res.send('ok');
});
router.get('/promise-chain/:data', function (req, res, next) {
    examplePromiseChain1(req.params.data) // passing flag from cmd
        .then(res => {
            console.log(res);
            res = "Promise 2";
            return res;
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        })
        res.send('ok');
});
router.get('/promise-all', function (req, res, next) {
    examplePromiseAll()
        .then(res => {
            console.log(res);

        })
        .catch(err => {
            console.error(err);
        })
        res.send('ok');
});
router.get('/async/:data', function (req, res, next) {
    try {
        data = examplePromiseAsync(req.params.data);
        console.log('data 2',data);
    } catch (error) {
        console.error(error);
    }
    res.send('ok');
});

async function examplePromiseAsync(status) {
    console.log(111);
   data =  await examplePromise(status);
   console.log('data ',data);
   return data;
}


function examplePromiseAll() {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    return Promise.all([promise1, promise2, promise3]);
}
function examplePromise(status) {
    console.log("status  ", status);
    let promise = new Promise(function (resolve, reject) {
        if (status == "true") {
            setTimeout(() => {
                resolve("success");
            }, 3000);

        }
        else {
            setTimeout(() => {
                reject(Error("Error !"));
            }, 3000);
        }
    })
    return promise;
}
function examplePromiseChain1(status) {
    console.log("status  ", status);
    let promise = new Promise(function (resolve, reject) {
        if (status == "true") {
            setTimeout(() => {
                resolve("promise 1");
            }, 3000);
        }
        else {
            setTimeout(() => {
                reject(Error("Error 1 !"));
            }, 3000);
        }
    })
    return promise;
}
module.exports = router;
