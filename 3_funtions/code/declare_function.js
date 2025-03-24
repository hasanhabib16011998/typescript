// Named function
function greet1(name) {
    return 'hello ' + name;
}
// Function expression
var greet2 = function (name) {
    return 'hello ' + name;
};
// Arrow function expression
var greet3 = function (name) {
    return 'hello ' + name;
};
// Shorthand arrow function expression
var greet4 = function (name) { return 'hello ' + name; };
// Function constructor
var greet5 = new Function('name', 'return "hello " + name');
console.log(greet1("Hasan"));
