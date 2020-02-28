var http = require('http');
//GET
var options = {
    host : 'www.google.com',
    port : 80,
    path : '/'
};

//POST
var opts = {
    host : 'www.google.com',
    port : 80,
    method : 'POST',
    path : '/',
    headers: {}
};

//GET method 
var req = http.get(options,function(res){
    var resData = '';
    res.on('data',function(chunk){
        resData +=chunk;
    });

    res.on('end',function(){
        console.log(resData);
    });
});

req.on('error', function(err){
    console.log("error : " + err.message);
})
