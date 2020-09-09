class Person {
    constructor(name) {
        this.name = name;
        
    }
    walk() {
        console.log('walk');
    }

}

// passing 'Fabiha' as an argument
const person = new Person('Fabiha');
console.log(person); 
person.walk();
