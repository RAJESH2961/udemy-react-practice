// Primitives
let age: number;
age = 20;

// Complex data types

let person: {
    name: string;
    age: number;
}
// assignining values
person = {
    name: 'Rajesh',
    age: 20
}

// Array of peoples
let peoples: {
    name: string;
    age: number;
}[];
// array of objects
peoples = [
    {
        name: 'Rajesh',
        age: 20
    },
    {
        name: 'Rajesh',
        age: 20
    }
];

// Type inference

// let course: string = 'React- The Complete Guide' // Explicitily Declaring Types
// Type Inference is a feature in languages like TypeScript where the compiler automatically deduces (infers) the type of a variable based on the value assigned to it, without you needing to explicitly annotate it.
// let course = 'React- The Complete Guide';
let sName = "Alice";       // inferred as string
let isStudent = true;     // inferred as boolean
let scores = [90, 80, 70]; // inferred as number[]


let course : string | number[] = "some data"

// Allias Examples
type Person = {
    name: string;
    age: number;
};

let p1: Person = {
    name: "Rajesh",
    age: 20
};
let p2: Person = {
    name: "Rajesh",
    age: 20
};

// Functions & types
// function add(a: number, b: number) {
//     return a+b;
// }
// function add(a: number, b: number): number {
//     return a+b;
// }

function print(value: any): void{
    console.log(value);
}

// Generics

const demoArray = [1,2,3]
function insertAtBegining<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const updatedArray = insertAtBegining(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBegining(['a', 'b', 'c'], 'd'); // [-1, 1, 2, 3]