import {Person} from './person';

export  function promote() {

}

// this is an example of inheritance
// the teacher export is the main function 
export default class Teacher extends Person{
    constructor(name, degree) {
        super(name); // this will initialise the name property
        this.degree = degree;
        
    }
    teach() {
        console.log('teach');
    }
};