class Person {
    constructor(name, age) {
        this.name = name; // here we defaine the properties of the class
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    introduce() {
        console.log(`Allow me to introduce myself. My name is ${this.name} and I am ${this.age} years old`);
    }

    celebrateBirthday() {
        this.age++;
        console.log(`It's my birthday! I am now ${this.age} years old!`);
    }
}

const person = new Person('John', 30); // here we create an instance of the class

// person.sayHello();

// person.introduce();
person.celebrateBirthday();
person.celebrateBirthday();
person.celebrateBirthday();
person.celebrateBirthday();