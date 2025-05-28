function handleTimeout(){
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out again...");
}

setTimeout(handleTimeout,5000);

// We can also pass the user defined function also
function greeter(greeterFn){
    greeterFn();
}

greeter(() => console.log("Hi"))