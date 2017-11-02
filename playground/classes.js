class Person {
  constructor(name = 'Anounymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I'm ${this.name}`;
  }
  printDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
  toString() {
    return this.getGreeting();
  }
}

class Child extends Person {
  constructor(name, age, like) {
    super(name, age);
    this.like = like;
  }
  getGreeting() {
    return `Hiiiiii! My name is ${this.name} and I like ${this.like}`;
  }  
}

class Baby extends Person {
  getGreeting() {
    return 'Waaahhhh';
  }
}

var me = new Person('Erick', 27);

console.log(me.toString());
console.log(me.getGreeting());
console.log(me.printDescription());

var anonymous = new Child('Mike', 4, 'Cars');
console.log(anonymous.printDescription());
console.log(anonymous.getGreeting());

var bebe = new Baby('Sam', 0);
console.log(bebe.printDescription());
console.log(bebe.getGreeting());