class Person {
    constructor(name) {
        // set the name property to the name object we
        // recieve from the outside
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
