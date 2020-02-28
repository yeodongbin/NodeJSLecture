var Calc = require('./03.calc3');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop이벤트를 전달함');
