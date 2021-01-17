var express = require('express');
var winston = require('winston');
var router = express.Router();
var dynamicLevelLog = null;
/* GET users listing. */

router.get('/basic-config', function (req, res, next) {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { controller: "user controller", service: 'user-service' },
        transports: [
            //
            // - Write all logs with level `error` and below to `error.log`
            // - Write all logs with level `info` and below to `combined.log`
            //
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });
    logger.info('Hello again distributed logs');
    logger.error('This is sample error');
    res.send('check log file');
});
router.get('/combine-log', function (req, res, next) {
    const logger = winston.createLogger({
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });
    return logger;
    logger.info('Hello again distributed logs');
    logger.error('This is sample error');
    res.send('check log file');
});
router.get('/dynamicLevel', function (req, res, next) {
    dynamicLevelLog = winston.createLogger({
        format: winston.format.json(),
        level: 'debug',
        transports: [
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });

    logger.debug('Hello Debug');
    logger.info('Hello Info');
    logger.dynamicLevel().error('Hello Error');
    setTimeout(() => {
        logger.level = 'info'; // change level
        logger.dynamicLevel().info('>>>>>>>>>>>>>>>>');
        logger.dynamicLevel().debug('Hello Debug'); // wont print this
        logger.dynamicLevel().info('Hello Info');
        logger.dynamicLevel().error('Hello Error');
    }, 3000);

    res.send('check log file');
});

router.get('/', function (req, res, next) {

    res.send('try with proper input');
});



module.exports = router;
