// Let, Const, Var 

// var > ye js ka purana method hai variable banane ka

// dobara declare hu sakta hai
// value change hu skti hai
// function scope follow karta hai

var name = "sardar";

var name = "ali"; // declare again

name = "salman"; // value change

console.log(name);

// function scope 

function cities(){
    var city = "karachi";
    console.log(city);
}

cities();

// city = "lahore";
// console.log(city);  // error > city function ke bahir access nahi hu skta 

// let > ES6 (2015) me introduce hua. 
// Aaj kal zyadatar let use hota hai jab value future me change honi ho.

// dobara declare nahi hu skta 
// value change hu skti hai 
// block scope follow karta hai 

let score = 80;

// let score = 70;   // error > dobara declare nahi hu skta

score = 50;   // allowed > value can changed

console.log(score);


// block scope {} sirf paranthesis ke ander access huga uske bahir nahi

{
    let email = "sardar@gmail.com";
    console.log(email);
}

// console.log(email);  // error > can not access outside paranthesis

// const > Jab aap chahte ho ke variable ki value kabhi reassign na ho, tab const use karte hain.

// Dubara declare nahi ho sakta.
// Value reassign nahi ho sakti.
// Block scope follow karta hai.

const pi = 3.14;

// const pi = 9.12;  // error > can not declare again

// pi = 12.78;  // error > can not reassign

console.log(pi);


// block scope {} parenthesis ke ander he sirf access kar skte hai 

// const aur Objects/Arrays

const person = {
    name: "sardar",
};

person.name = "ali";

console.log(person.name);

// object ke ander ki properties change hu skti hai 
// lekin pura object reasign nahi kar sakte 

// person = {
//     name: "salman",
// }

// console.log(person.name); // error > can not reasign

// same ye rule array me bhi huta hai 

const number = [1,4,5,7];

number.push(8); // allowed hai

console.log(number);

// number = [];  // dobara reassign nahi hu skta

// practice question > var,let,const 

// ### 1.`var` variables can be re-declared in the same scope.

// true

// ### 2.`let` variables can be re-declared in the same scope.

// true

// ### 3.`const` variables must be initialized at the time of declaration.

// true

// ### 4.A variable declared with `let` can be reassigned.

// true

// ### 5.A variable declared with `const` can be reassigned.

// false

// ### 6.`var` is block-scoped.

// false

// ### 7.`let` is block-scoped.

// true

// ### 8.`const` is block-scoped.

// true

// ### 9.Variables declared with `var` are hoisted and initialized with `undefined`.

// true

// ### 10.Variables declared with `let` are hoisted in the same way as `var`.

// true

// ### 11.Variables declared with `const` are hoisted and can be accessed before declaration.

// true

// ### 12.Trying to access a `let` variable before its declaration causes an error.

// console.log(me);

// let me = "ok";

// true // can not accessed before declaration

// ### 13.The period between entering a scope and declaring a `let`
// or `const` variable is called the Temporal Dead Zone (TDZ).

// yes

// 14.`var` follows function scope.

// true

// 15.If `var` is declared inside an `if` block, it can still be accessed outside that block.

// true

// ### 16.If `let` is declared inside a `for` loop, it cannot be accessed outside the loop.

// false

// ### 17.`const` means that the value can never change under any circumstances.

// true

// ### 18.The properties of an object declared with `const` can still be modified.

// false

// ### 19.Elements of an array declared with `const` can still be added or removed.

// true

// ### 20.A `const` object can be completely reassigned to a new object.

// false

// ## Choose the Correct Keyword (`var`, `let`, or `const`)

// ### 21.

// You are storing the value of π (pi), which should never change.

// Which keyword would you use?

// ---

// ### 22.

// You are creating a counter for button clicks, and its value increases over time.

// Which keyword would you use?

// ---

// ### 23.

// You are working on an old JavaScript project that heavily uses function-scoped variables.

// Which keyword are you most likely to encounter?

// ---

// ### 24.

// You are storing an array of users, and you only need to modify the contents of the array, not replace the entire array.

// Which keyword would you choose?

// ---

// ### 25.

// You are storing the website name, which remains constant throughout the application.

// Which keyword would you choose?

// ---

// ## Explain the Output (Conceptually)

// ### 26.

// What happens if a `let` variable is declared twice in the same scope?

// ---

// ### 27.

// What happens if you try to reassign a `const` variable?

// ---

// ### 28.

// What happens if you access a `var` variable before its declaration?

// ---

// ### 29.

// What happens if you access a `let` variable before its declaration?

// ---

// ### 30.

// What happens if you access a `const` variable before its declaration?

// ---

// ## Interview Style Questions

// ### 31.

// What is the main difference between `re-declaration` and `reassignment`?

// ---

// ### 32.

// Why is `var` generally avoided in modern JavaScript?

// ---

// ### 33.

// What is the Temporal Dead Zone (TDZ)?

// ---

// ### 34.

// Why do developers prefer `const` by default?

// ---

// ### 35.

// In what situations should `let` be preferred over `const`?

// ---

// ### 36.

// Can an object declared with `const` have its properties updated? Explain.

// ---

// ### 37.

// Can an array declared with `const` use methods like `push()` or `pop()`? Why?

// ---

// ### 38.

// Which keywords provide block scope?

// ---

// ### 39.

// Which keyword provides function scope?

// ---

// ### 40.

// If you were starting a new React project today, which keywords would you primarily use and why?

// ---

// Ye type ke **statement-based questions** interviews me bohot common hote hain, kyunki ye sirf syntax nahi balki **actual understanding** test karte hain. Pehle inke answers khud likho (True/False ya explanation), phir mujhe bhej do. Main interviewer ki tarah check karunga aur feedback dunga.
