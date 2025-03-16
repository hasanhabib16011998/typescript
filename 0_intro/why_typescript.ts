3 + [] // Error: Did you really mean to add a number and an array?
let obj = {}
obj.foo // Error: You forgot to define the property "foo" on obj.

function a(b) {
 return b/2
}
a("z") // Error: The function "a" expects a number,
 // but you gave it a string.