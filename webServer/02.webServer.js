var http = require('http');
var fs = require('fs');
var server = http.createServer();

var host = '192.168.0.5';
var port = 3000;

server.listen(port, function() {
    console.log('Web Server Start!!: %d', port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('Client connection : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res) {
    console.log('Client request');
    // console.dir(req);

    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Dongbin</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Responce Page from NodeJS</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end()
});

server.on('close',()=> {
    console.log('Server Close');
});


