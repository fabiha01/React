// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // this is how you would combine the arrays using the concat method
// // it will combine the two arrays together
// // const combined = first.concat(second);
// // console.log(combined);

// // in the new array - we spread the items from the arrays above
// // but also add in the 'a' and 'b' elements using a comma
// // const combined = [...first, 'a', ...second, 'b'];
// // console.log(combined);

// const clone = [...first];
// console.log(clone);
// console.log(first);


// we can use the spread operator in objects
const first = {name: 'Mosh'};
const second = {job: 'instructor'};
const combined = {...first, ...second, location: 'Australia'};
console.log(combined);
