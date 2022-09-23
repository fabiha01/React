// variables defined with the var keyword are scoped to the function

// variables defined with let are scoped to block in which they are defined

// function sayhello() {
//     for (let i=0; i<5; i++){
//         console.log(i);
//     }

//     console.log(i);
// }

// sayhello();

// cannot reassign a const variable
const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    },
    talk() {}

}

person.walk();
const walk = person.walk.bind(person);
walk();












// person.talk();
// person.name = ''; 

// const targetMember = 'name';

// // we use the bracket notation when we don't know which property we will access
// person[targetMember.value] = 'John'; 

