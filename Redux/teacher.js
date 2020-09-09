import {Person} from './person';

// this is an example of inheritance
export class Teacher extends Person{
    constructor(name, degree) {
        super(name); // this will initialise the name property
        this.degree = degree;
        
    }
    teach() {
        console.log('teach');
    }
};