var express = require(express);
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

//DATABASE SETTING
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'asdf1234',
    database: 'jsman',
})

connection.connect();

router.get('/', function (req, res) {
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'));
})

router.port('/', function (req, res) {
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var password = body.password;
    console.log(email);


    var sql = { email : email, name : name, pw : password};
    var query = connection.query('insert into user set ?', sql, function (err, rows) {
            if(err) { throw err; }
            console.log("ok db insert", rows.insertID, name);
    })
})

module.exports = router;
