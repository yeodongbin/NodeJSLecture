var express = require(express);
var app = express();
var router =express.router();
var path = require('path');

router.get('/', function(req,res) {
    console.log('main js loaded');
    res.sendFile(__dirname + '/public/main.html');
});


module.exports = router;
