//Normal Array
const nameData = ["Rajesh", "Gangadharam"]
// const firstName = nameData[0];
// const lastName = nameData[1];
// console.log(firstName);
// console.log(lastName);

//Using Destructuring array we can reduce the number of lines of codes and also effectively we can handle the values
const [firstName, lastName] = nameData;
console.log(firstName);
console.log(lastName);

// we can also skip values 
const hobbies = ['Reading', 'Swimming', 'Dancing']
const [,,hobby3]= hobbies;
console.log("Hobby 3  is "+hobby3);
