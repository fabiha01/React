const colours = ['red', 'blue', 'green'];

// for each colour we are returning a string like this
const items = colours.map(colour => `<li>${colour}</li>`);

console.log(items);