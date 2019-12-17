var express = require('express');// ; optional
var app = express();

app.listen(3000, function () {
    console.log('hello world');
});

app.use(express.static('public'));

console.log('end of app.js!');

// respond with "hello world" when a GET request is made to the homepage
// nodejs getting started
app.get('/', function (req, res) {
    res.send('<h1>hello webpage</h1>');
    //res.sendFile('C:\Users\DongBIN_PC\node-workspace\NodeJSLecture\nodeExpress\public\main.html');
    res.sendFile(__dirname + '/public/main.html'); //최상위 + 상세URL
});

app.get('/main', function (req, res) {
    res.send('<h1>hello webpage</h1>');
    //res.sendFile('C:\Users\DongBIN_PC\node-workspace\NodeJSLecture\nodeExpress\public\main.html');
    res.sendFile(__dirname + '/public/main.html'); //최상위 + 상세URL
});
