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

// this is an example of inheritance
class Teacher extends Person{
    constructor(name, degree) {
        super(name); // this will initialise the name property
        this.degree = degree;
        
    }
    teach() {
        console.log('teach');
    }
};

const teacher = new Teacher('Ali', 'Msc');
teacher.teach();
console.log(teacher);