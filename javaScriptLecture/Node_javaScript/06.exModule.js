//>npm install nconf 
var nconf = require('nconf')
nconf.env()

console.log('%s',nconf.get('OS'))