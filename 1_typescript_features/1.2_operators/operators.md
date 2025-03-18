## Increment and Decrement

The increment (`++`) and decrement (`--`) operators can only be applied to variables of type `any`, `number`, or `enum`. This is mainly used to increase index variables in a loop or to update counting variables in your program. In these cases, you will typically be working with a `number` type. The operator works on variables with the `any` type, as no type checking is performed on these variables.

### Example:
```ts
let counter = 0;
do {
    ++counter;
} while (counter < 10);
// 10
alert(counter);
```

### Increment and decrement of enumerations:
```ts
enum Size {
    S,
    M,
    L,
    XL
}
let size = Size.S;
++size;
console.log(Size[size]); // M
size = Size.XL;
--size;
console.log(Size[size]); // L
size = Size.XL;
++size;
console.log(Size[size]); // undefined
```

## Binary Operators

The operators in the following list are designed to work with two numbers. In TypeScript, it is valid to use the operators with variables of type `number` or `any`. When using a variable with the `any` type, ensure it contains a number. The result of an operation in this list is always a number.

### Binary operators:
- `-` 
- `*`
- `/`
- `%`
- `<<`
- `>>`
- `>>>`
- `&`
- `^`
- `|`

The plus (`+`) operator is absent from this list because it is a special case: a mathematical addition operator as well as a concatenation operator. Whether the addition or concatenation is chosen depends on the type of the variables on either side of the operator.

### Rules for the plus operator:
- If the type of either of the arguments is a string, the result is always a string.
- If the type of both arguments is either `number` or `enum`, the result is a number.
- If the type of either of the arguments is `any`, and the other argument is not a string, the result is `any`.
- In any other case, the operator is not allowed.

### Examples:
```ts
// 6: number
const num = 5 + 1;
// '51': string
const str = 5 + '1';
```

When the plus operator is used with only a single argument, it acts as a shorthand conversion to a number.

### Example:
```ts
const str: string = '5';
// 5: number
const num = +str;
// -5: number
const negative = -str;
```

## Bitwise Operators

Used to perform bit-level operations.

- `&` (AND): Performs a bitwise AND.
- `|` (OR): Performs a bitwise OR.
- `^` (XOR): Performs a bitwise XOR.
- `~` (NOT): Performs a bitwise NOT.
- `<<` (Left Shift): Shifts bits to the left.
- `>>` (Right Shift): Shifts bits to the right.
- `>>>` (Unsigned Right Shift): Shifts bits to the right with zero-fill.

### Example:
```ts
let u = 5;  // 0101 in binary
let v = 3;  // 0011 in binary
console.log(u & v);  // Output: 1 (0001 in binary)
console.log(u | v);  // Output: 7 (0111 in binary)
console.log(u ^ v);  // Output: 6 (0110 in binary)
console.log(~u);  // Output: -6 (inverts all bits)
console.log(u << 1);  // Output: 10 (1010 in binary)
console.log(u >> 1);  // Output: 2 (0010 in binary)
console.log(u >>> 1); // Output: 2 (0010 in binary)
```

## Logical Operators

Used to combine multiple boolean expressions.

- `&&` (Logical AND): Returns true if both operands are true.
- `||` (Logical OR): Returns true if at least one of the operands is true.
- `!` (Logical NOT): Returns true if the operand is false.

### Example:
```ts
let m = true;
let n = false;
console.log(m && n);  // Output: false
console.log(m || n);  // Output: true
console.log(!m);  // Output: false
console.log(!n);  // Output: true
```

## Conditional (Ternary) Operator

A shorthand for an `if-else` statement.

### Example:
```ts
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes
```

## Type Operators

Used to perform operations related to types.

- `typeof`: Returns the type of a variable.
- `instanceof`: Checks if an object is an instance of a class or constructor function.

### Example:
```ts
let str = "Hello, TypeScript!";
let num = 42;
console.log(typeof str); // Output: string
console.log(typeof num); // Output: number

class Person {}
let person = new Person();
console.log(person instanceof Person); // Output: true
```

## Destructuring

Destructuring allows you to unpack an array or object into named variables. Below code shows an array of triangle numbers being unpacked into two variables that capture the first and second items in the array. Once the array has been destructured, the named variables contain the values. The original array is not affected by the destructuring.

### Example:
```ts
const triangles = [1, 3, 6, 10, 15, 21];
// Destructuring
const [first, second] = triangles;
// 1
console.log(first);
// 3
console.log(second);
```

### Array destructuring with a rest parameter:
```ts
const triangles = [1, 3, 6, 10, 15, 21];
// Destructuring with a rest argument
const [first, second, ...remaining] = triangles;
// 1
console.log(first);
// 3
console.log(second);
// [6, 10, 15, 21]
console.log(remaining);
```

You can also use destructuring to unpack objects. The syntax for object destructuring is slightly different.

### Example:
```ts
const highSchool = { school: 'Central High', team: 'Centaurs' };
// Object destructuring
const { school: s, team: t } = highSchool;
// 'Central High'
console.log(s);
// 'Centaurs'
console.log(t);
```

### Auto-unpacking:
```ts
const highSchool = { school: 'Central High', team: 'Centaurs' };
// Auto-unpacking
const { school, team } = highSchool;
// 'Central High'
console.log(school);
// 'Centaurs'
console.log(team);
```

## Spread Operator

The spread operator does the opposite of destructuring and can be used to pack arrays and objects using a shallow copy. The spread operator works with properties, but sadly not methods.

### Array spreading:
```ts
const squares = [1, 4, 9, 16, 25];
const powers = [2, 4, 8, 16, 32];
// Array spreading
const squaresAndPowers = [...squares, ...powers];
// [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
console.log(squaresAndPowers);
```

### Object Spreading:
```ts
const emergencyService = {
    police: 'Chase',
    fire: 'Marshall',
};
const utilityService = {
    recycling: 'Rocky',
    construction: 'Rubble'
};
const patrol = { ...emergencyService, ...utilityService };
// { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble' }
console.log(patrol);
```

You can even use the spread operator for function arguments; the code below causes the function to be called with the individual numbers supplied in the hexagon array.

### Example:
```ts
function add(a: number, b: number, c: number) {
    return a + b + c;
}
const hexagons = [1, 6, 15];
// Spread operator in function call
const result = add(...hexagons);
// 22
console.log(result);
```

One of the primary benefits of the spread operator is that it removes the need for loop syntax in many scenarios, which makes your code more readable and more expressive.