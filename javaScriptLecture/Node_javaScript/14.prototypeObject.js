function Person(name, age){
    this.name = name;
    this.age = age;
};

Person.prototype.walk = function(speed) {
    console.log(speed + 'km');
}

var person1 = new Person('nayeon', 20);
var person2 = new Person('jeonyeon', 21);

console.log(person1.name + '객체의 walk(10)을 호출합니다.');
person1.walk(10);
