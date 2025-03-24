// Named function
function greet1(name: string) {
    return 'hello ' + name;
}

// Function expression
let greet2 = function(name: string) {
    return 'hello ' + name;
}

// Arrow function expression
let greet3 = (name: string) => {
    return 'hello ' + name;
}

// Shorthand arrow function expression
let greet4 = (name: string) => 'hello ' + name;

// Function constructor
let greet5 = new Function('name', 'return "hello " + name');

console.log(greet1("Hasan"));
