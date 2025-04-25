const hobbies = ["Coding", "Swimming", "Cricket"]

//for of
for(let hobby of hobbies){
    console.log(hobby);
}

//for in
for(let hobby in hobbies){
    console.log(hobby +" : "+hobbies[hobby]);
}

// The main Difference between for of and for in is
// for of iterates directly through array
// for in iterates through index