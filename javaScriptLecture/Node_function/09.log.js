//install 'winston' module 
//> npm install winston --save
//> npm install winston-daily-rotate-file --save
//> npm install moment --save

var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');

function timeStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');

};

var logger = new (winston.Logger) ({
    
})