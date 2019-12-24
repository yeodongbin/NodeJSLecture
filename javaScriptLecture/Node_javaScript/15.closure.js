// 클로져
// 함수 내에서 함수를 정의하고 사용하면 클로져
// 
function getClosure(text) {
    var _text = text;
    return function () {
        return _text;
    };
}

var closure1 = getClosure('yeo');
var closure2 = getClosure('dong');
var closure3 = getClosure('bin');

console.log(closure1());
closure1._text = 'lee';
console.log(closure1._text);

console.log(closure1());
console.log(closure2());
console.log(closure3());

//------------------------------------------

var base = 'hello, ';

function sayHelloTo(name) {
    var text = base + name;
    return function () {
        console.log(text);
    };
}

var helloTo1 = sayHelloTo('쯔위');
var helloTo2 = sayHelloTo('사나');
var helloTo3 = sayHelloTo('나연');

helloTo1();
helloTo2();
helloTo3();

//-----------------------------------------
function Hello(name) {
    this._name = name;
}

Hello.prototype.say = function () {
    console.log('Hello, ' + this._name);
}

var hello1 = new Hello('쯔위');
var hello2 = new Hello('사나');
var hello3 = new Hello('나연');
hello1.say();
hello2.say();
hello3.say();
hello1._name = 'anonymous';
hello1.say();

//--------- 클로져를 활용한 은닉성 ---------
function hello(name) {
    var _name = name;
    return function () {
        console.log('Hello,, ' + name);
    }
}

var hello4 = hello('쯔위');
var hello5 = hello('사나');
var hello6 = hello('나연');

hello4();
hello5();
hello6();

//--------- 클로져 반복문 ---------
//var i;
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

var i;
for (i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

