var http = require('http');
var fs = require('fs');
var server = http.createServer();

var host = '192.168.0.5';
var port = 3000;

server.listen(port, function () {
    console.log('Web Server Start!!: %d', port);
});

server.on('connection', function (socket) {
    var addr = socket.address();
    console.log('Client connection : %s, %d', addr.address, addr.port);
});

server.on('request', function (req, res) {
    console.log('Client request');
    // console.dir(req);

    var filename = 'wifi.png';
    var infile = fs.createReadStream(filename, { flags: 'r' });
    var filelength = 0;
    var curlength = 0;

    //Confirm file_size
    fs.stat(filename, function (err, stats) {
        filelength = stats.size;
    });

    res.writeHead(200, { "Content-Type": "image/png" })
    infile.on('readable', function () {
        var chunk;
        while (null != (chunk = infile.read())) {
            console.log('%d 바이트', chunk.lenght);
            curlength += chunk.lenght;
            res.write(chunk, 'utf8', function (err) {
                console.log('%d, %d', curlength, filelength);
                if (curlength >= filelength) {
                    res.end();
                }
            })
        }
    });
});

server.on('close', () => {
    console.log('Server Close');
});


