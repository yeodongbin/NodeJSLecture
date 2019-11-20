var express = require('express');
var app = express();

app.listen(3000, function () {
    console.log('hello world');
});

console.log('end of app.js');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello webpage');
});
