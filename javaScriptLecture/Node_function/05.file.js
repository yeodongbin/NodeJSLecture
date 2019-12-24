var fs = require('fs');
//동기식
//var data = fs.readFileSync('./01.address.js','utf8');
//console.log(data);

//비동기식
fs.readFile('./01.address.js', 'utf8', function (err, data) {
    if (!err) {//null
        console.log(data);
    }
});

fs.writeFile('./output.txt','Hello World',function(err){
    if(err){
        console.log('Error : '+err);
    }
    console.log('output.txt 파일에 데이터 쓰기');
});


