export class Person {
    constructor(name) {
        // set the name property to the name object we
        // recieve from the outside
        this.name = name;
        
    }
    walk() {
        console.log('walk');
    }

}