var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.info('req.query.source',req.query.source);
    //saveSource
    res.render('index', { title: '全国拼图大PK'});
});

module.exports = router;
