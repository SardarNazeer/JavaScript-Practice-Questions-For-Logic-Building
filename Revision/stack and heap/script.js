// Stack and Heap Memory

// Stack Memory > Stack me primitive data types store hote hain.
// stack memory me variable ki copy milti hai,
// islye change karne pe asal value change nahi huti. 

// Primitive types:

// String
// Number
// Boolean
// null
// undefined
// BigInt
// Symbol

// Stack memory ki khas baat:

// Ye fixed size hoti hai.
// Access fast hota hai.
// Isme actual value store hoti hai.
// Jab ek variable ko dusre variable me assign karte ho, to copy banti hai.

// let a = 20;
// let b = a;

// b = 10;

// console.log(a);
// console.log(b);

// b ki value a me copy kardi b ki value change karne se a pe asar nahi parhega 

// Heap Memory > Heap me non-primitive (reference) types store hote hain.
// heap memory me reference milta hai real value ka, 
// islye change karne pe asal values b change huti hai


// Reference types:

// Objects
// Arrays
// Functions

// Heap memory ki khas baat:

// Ye dynamic size ki hoti hai.
// Actual data Heap me store hota hai.
// Stack me sirf us data ka reference (address) hota hai.

// example 

let person1 = {
    name: "ali",
}

let person2 = person1;

person2.name = "sardar";

console.log(person1.name);
console.log(person2.name);

// person2 = person1 karne par object copy nahi hua. 
// Dono variables same object ke address ko point karne lage

// Primitive = Stack = Copy of Value
// Object/Array/Function = Heap = Copy of Reference

// difference b/w heap and stack ?

// Primitive data types Stack memory me value ke taur par store hote hain, 
// jabke Objects, Arrays aur Functions Heap memory me store hote hain 
// aur Stack unke references ko hold karta hai. 
// Primitive types copy by value aur reference types copy by reference behave karte hain.

// spread operator agar actual copy chaiye ho obj,arr and function ki.

let person1Detail = {
    name: "sardar",
    age: 21,
}

let person2Detail = {...person1Detail};

person2Detail.name = "qadeer";

console.log(person1Detail.name);
console.log(person2Detail.name);


// spread opeartor se naya object ban gaya 
// islye uske change karne pe real obj ky changes nahi huwy


// ## Stack (Primitive Types)

// ### 1) Predict the output.

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
// a = 10, b = 20

// 2) Predict the output.


let firstName = "Ali";
let secondName = firstName;

secondName = "Ahmed";

console.log(firstName);
console.log(secondName);
// firstName = "ali"
// secondName = "ahmed"

// 3) Predict the output.

let isLoggedIn = true;
let userStatus = isLoggedIn;

userStatus = false;

console.log(isLoggedIn);
console.log(userStatus);
// isLoggedIn = true
// userStatus = false

// 4) What type of memory is used?


let age = 25;
// stack

// Heap (Reference Types)

// 5) Predict the output.

let user1 = {
    name: "Ali"
};

let user2 = user1;

user2.name = "Ahmed";

console.log(user1.name);
console.log(user2.name);
// user1.name = ahmed
// user2.name = ahmed

// 6) Predict the output.

let numbers1 = [1, 2, 3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);
// numbers1 = [1,2,3,4]
// numbers2 = [1,2,3,4]

// 7) Identify the memory type.


let person = {
    age: 22
};
// heap

// 8) Predict the output.

let obj1 = {
    city: "Karachi"
};

let obj2 = obj1;

obj1.city = "Lahore";

console.log(obj2.city);
// ob1.city = lahore
// obj2.city = lahore

// Copy by Value vs Copy by Reference

// 9) Predict the output.

let x = 50;
let y = x;

y = 100;

console.log(x);
console.log(y);
// x = 50
// y = 100

// 10) Predict the output.

let arr1 = ["HTML", "CSS"];
let arr2 = [...arr1];

arr2.push("JavaScript");

console.log(arr1);
console.log(arr2);
// arr1 = ["html","css"];
// arr2 = ["html","css","javaScript"];

// 11) Stack ya Heap?

let company = "Google";
// stack

// 12) Stack ya Heap?

let employees = ["Ali", "Ahmed"];
// heap

// 13) Stack ya Heap?

function greet() {
    console.log("Hello");
}
// heap

// 14) Predict the output.

// let a = {
//     value: 5
// };

// let b = a;

// b.value = 10;

// console.log(a.value);
// console.log(b.value);
// a.value = 10;
// b.value = 10;

// 15) Predict the output.

let num1 = 30;
let num2 = num1;

num1 = 60;

console.log(num1);
console.log(num2);
// num1 = 60;
// num2 = 30;

// 16) Predict the output.

let userr1 = {
    name: "Ali"
};

let userr2 = {
    ...userr1
};

userr2.name = "Ahmed";

console.log(userr1.name);
console.log(userr2.name);
// user1.name = ali
// user2.name = ahmed


// 17) Predict the output.


let arrA = [1, 2];
let arrB = arrA;

arrA.push(3);

console.log(arrA);
console.log(arrB);
// arrA = [1,2,3];
// arrB = [1,2,3];


// 18) Predict the output.

let message = "Hello";
let copyMessage = message;

message = "Hi";

console.log(message);
console.log(copyMessage);
// message = hi
// copyMessage = hello

// 19) True or False?

// Statement: Primitive data types are copied by reference.

// false

// 20) True or False?

// Statement: Objects and arrays are stored in Heap memory, 
// and variables hold references to them.

// true