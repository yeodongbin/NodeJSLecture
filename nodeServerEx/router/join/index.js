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

<<<<<<< HEAD

    var sql = { email : email, name : name, pw : password};
    var query = connection.query('insert into user set ?', sql, function (err, rows) {
            if(err) { throw err; }
            console.log("ok db insert", rows.insertID, name);
    })
=======
    // var query = connection.query('insert into user (email, name, pw) values ("'
    //     + email + '","'
    //     + name + '","'
    //     + password + '")', function (err, rows) {
    //         if(err) { throw err; }
    //         console.log("ok db insert");
    // })
>>>>>>> f76445daaa4e06e67b079a167b447a64176a7a6b
})

module.exports = router;
