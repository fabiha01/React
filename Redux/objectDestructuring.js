const address = {
    street: 'my street',
    city: '',
    country: ''
};

// we get the properties from the object above to make for cleaner code

// we can give the property an alias using property:name
// this is the same as providing it a variable name
// const {street: st} = address;

// this will get all the properties from the object
// instead of creating individual variables, we can use
// this method of getting all of the properties
const {street, city, country} = address;
console.log(street);