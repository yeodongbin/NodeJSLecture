var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router =require('./router/index');

app.listen(3000, function(){
    console.log("start,express server on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engin', 'ejs');
app.use(router);




// var passprt = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var session = require('express-session');
// var flash = require('connect-flash');