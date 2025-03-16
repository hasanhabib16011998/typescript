### **Types in TypeScript**
TypeScript has **two main categories** of types:
1. **Primitive Types** (Built-in)
2. **User-defined Types** (Advanced)

---

## **1. Primitive Types (Built-in)**
These are the basic data types that come with TypeScript.

| Type | Description | Example |
|------|-------------|---------|
| **string** | Textual data | `let name: string = "Alice";` |
| **number** | Integers & floats | `let age: number = 25;` |
| **boolean** | True/False values | `let isActive: boolean = true;` |
| **null** | Explicit absence of value | `let value: null = null;` |
| **undefined** | Uninitialized variable | `let value: undefined = undefined;` |
| **bigint** | Large numbers | `let bigNum: bigint = 12345678901234567890n;` |
| **symbol** | Unique identifiers | `let sym: symbol = Symbol("id");` |
| **any** | Disables type checking | `let anything: any = "hello";` |

---

## **2. Object Types (User-defined)**
These are advanced types that allow you to define complex data structures.

### **a) Arrays**
Arrays can hold multiple values of the same type.

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob"];
```

---

### **b) Tuples**
Tuples define an array with **fixed length and types**.

```ts
let person: [string, number] = ["Alice", 25];
```

---

### **c) Enums**
Enums define a set of **named constants**.

```ts
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
console.log(c); // Output: 1
```

---

### **d) Objects**
Objects store multiple properties.

```ts
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
```

---

### **e) Interfaces**
Interfaces define the structure of an object.

```ts
interface Car {
  brand: string;
  model: string;
  year: number;
}

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
```

---

### **f) Type Aliases**
Aliases create reusable custom types.

```ts
type Employee = { name: string; salary: number };
let emp: Employee = { name: "John", salary: 5000 };
```

---

### **g) Union Types**
A variable can hold multiple types.

```ts
let value: string | number;
value = "Hello";  // Valid
value = 42;       // Valid
```


```ts
// Type annotation for a union type
let union: boolean | number;
// OK: number
union = 5;
// OK: boolean
union = true;
// Error: Type "string" is not assignable to type 'number | boolean'
union = 'string';
// Type alias for a union type
type StringOrError = string | Error;
// Type alias for union of many types
type SeriesOfTypes = string | number | boolean | Error;
```
---

### **h) Intersection Types**
Combines multiple types into one.

```ts
type Admin = { role: string };
type User = { name: string };
type SuperUser = Admin & User;

let su: SuperUser = { role: "Manager", name: "Alice" };
```

---

### **i) Literal Types**
A variable can only hold specific values.

```ts
let mode: "dark" | "light";
mode = "dark";  // Valid
// mode = "blue"; // Error
```

```ts
type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';
let kingdom: Kingdom;
// OK
kingdom = 'Bacteria';
// Error: Type 'Protista' is not assignable to type 'Kingdom'
kingdom = 'Protista';
```
Literal types are really just union types made up of specific values, so you can also create a number
literal type, or a union/literal hybrid type using the same syntax.
---

### **j) Function Types**
Define the type of a function.

```ts
let add: (x: number, y: number) => number;
add = (a, b) => a + b;
```

---

### **k) Mapped Types**
Creates new types by transforming properties.

```ts
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
type User = { name: string; age: number };
type ReadOnlyUser = ReadOnly<User>;
```

---

### **l) Conditional Types**
Allows types based on conditions.

```ts
type IsString<T> = T extends string ? "Yes" : "No";
type Test = IsString<string>;  // "Yes"
```

---

### **m) Type Assertions**
For explicit type conversion.

```ts
let someValue: any = "Hello";
let strLength: number = (someValue as string).length;
```

---

### **n) Never Type**
Represents values that never occur (e.g., errors, infinite loops).

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

### **o) Void Type**
Used for functions that don't return a value.

```ts
function logMessage(): void {
  console.log("Hello");
}
```

---

### **p) Unknown Type**
Safer alternative to `any`.

```ts
let data: unknown;
data = "Hello";
data = 42;  // Valid, but needs type checking before use
```

---

### **Summary of All Types**
| Category | Type |
|----------|------|
| **Primitive** | `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`, `any` |
| **Object** | `Array`, `Tuple`, `Enum`, `Object`, `Function`, `Class` |
| **Advanced** | `Interface`, `Type Alias`, `Union`, `Intersection`, `Literal`, `Mapped`, `Conditional`, `Never`, `Void`, `Unknown` |

---

### **Best Practices**
1. **Use explicit types** instead of `any`.
2. **Use interfaces or type aliases** for objects.
3. **Enable strict mode** (`"strict": true` in `tsconfig.json`).
4. **Prefer `unknown` over `any`** for safer type checking.

Would you like more details on a specific type? 😊