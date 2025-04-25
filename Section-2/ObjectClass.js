class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello"+this.name);
    }
}

//Creating objects
const user1 = new User("Rajesh",23);
console.log(user1);