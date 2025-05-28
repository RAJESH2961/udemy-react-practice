let hobbies = ['Reading', 'Writing','Swimming']

console.log(hobbies);

//Used to return an index of the String
let index = hobbies.indexOf("Swimming");
console.log(index)

//Used to find the element in the array
const data = hobbies.findIndex((item) => item === "Writing");
console.log(data);

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num*2);
console.log(doubled);

let modifiedDollar = numbers.map((num) => "$" + num*2 +".00");
console.log(modifiedDollar)

//Converting array values into objects
let convertedArrayObjects = hobbies.map((text) => ({key:text}))
console.log(convertedArrayObjects);
