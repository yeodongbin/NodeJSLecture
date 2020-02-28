var url = require('url');

var curURL = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%9E%90%EB%8F%99%EC%B0%A8');
var curStr = url.format(curURL);

console.log(curStr)
console.dir(curURL);

//Disentangle parameter from URL
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('%s', param.query);
console.log('%s',querystring.stringify(param));
