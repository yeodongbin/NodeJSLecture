var http = require('http');

var server = http.createServer();

var host = '192.168.0.5';
var port = 3000;
server.listen(port, function() {
    console.log('Web Server Start!!: %d', port);
});

// server.listen(port,host,'50000',function() {
//     console.log('Web Server Start!!: %s , %d ', host ,port);
// })
