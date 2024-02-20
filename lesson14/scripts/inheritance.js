class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const animal = new Animal('Animal');
const dog = new Dog('Rex', 'Pitbull');

animal.eat();
dog.eat();
dog.bark();