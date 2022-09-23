import {compose, pipe} from 'lodash/fp';

// function greet(fn) {
//     console.log(fn);
// }

// function sayHello() {
//     return function() {
//         return 'hello world!'

//     };
// }


// let fn = sayHello();
// let message = fn();


// greet(sayHello);


// let numbers = [1, 2, 3];
// // take each number and multiply it by 2
// numbers.map(number => number * 2);

// setTimeout(() => console.log('hi'), 1000);

let input = '  Javascript   '
// trimmed input
// non functional style of code
let output = '<div>' + input.trim() + '</div>';

// it takes a string and returns a trimmed string
const trim = str => str.trim();

// takes a string and then wraps in div tags
// const wrapInDiv = str => `<div> ${str} </div>`;
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase();


const transform = pipe(trim, toLowerCase, wrap('span'));
const result = transform(input);

// this is called functon composition
// const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);