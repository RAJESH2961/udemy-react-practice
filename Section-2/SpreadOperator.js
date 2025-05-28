const hobbies = ["Sports", "Cooking"]
const newHobby = ["Swimming"]
const mergedHobby = [hobbies,newHobby]
console.log(mergedHobby)//Iw will return an nested list

//Spread operator ...
const spreadOperator = [...hobbies,...newHobby]
console.log(spreadOperator);

// 2. Spread with Objects
const user = {
    name :"Rajesh",
    age : 21
}
console.log(user);
const adminUser = {
    isAdmin : true,
    ...user,
}
console.log(adminUser);


function sum(x, y, z) {
    return x + y + z;
  }
  
  const nums = [1, 2, 3];
  console.log(sum(...nums)); // 6
  