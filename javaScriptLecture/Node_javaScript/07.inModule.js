//nodejs.org/api
var os = require('os')

console.log('%s',os.hostname)
console.log('%d, %d',os.freemem, os.totalmem)

console.dir(os.cpus())
console.dir(os.networkInterfaces())
