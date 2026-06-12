// Global and local scope in javascript

// scope > JavaScript me scope ka matlab hota hai ke koi 
// variable program ke kis hisse me access ho sakta hai.

// Global Scope > Jo variable function ya block ({}) ke bahar declare hota hai, 
// woh global scope me hota hai. Us variable ko code
// ke kisi bhi part se access kiya ja sakta hai.

// example 

let name = "sardar";

function greet(){
    console.log("hello", name);
};

greet();

// Local Scope (Function Scope / Block Scope)

// Jo variable function ke andar declare hota hai, 
// woh sirf us function ke andar accessible hota hai.

function hello(){
    let namee = "sardar"
};

// console.log(namee);  // namee > ko function ke bahir access nahi kar skte

// Lexical Scope > local function ke ander function, 
// inner func outer func ke var aces kr skta hai.
// isko closure bhi kehty hai 

function outer(){
    let person = "ali";
    function inner(){
        console.log(person);
    };
    inner();

}

outer();

// Block Scope (let aur const)

// let aur const curly braces {} ke andar hi accessible hote hain.

// if (true) {
//     let age = 19;
//     const city = "karachi";
// }

// console.log(age);  // reference error
// console.log(city);  // reference error

// var ka Behaviour

// var block scope follow nahi karta.

// if (true) {
//     var age = 19;
//     var city = "karachi";
// }

// console.log(age); //allowed
// console.log(city); //allowed


// Global & Local Scope Practice Questions

// Question 1 Predict the output:


let message = "Hello";

function greet() {
    // console.log(message);
}

greet();

// reference error 

// Question 2: Predict the output:

function test() {
    let num = 100;
    console.log(num);
}

test();

// console.log(num);

// 100 & reference error


// Question 3: Predict the output:

let city = "Karachi";

function display() {
    let city = "Lahore";
    console.log(city);
}

display();

console.log(city);

// city = "lahore"

// city = "karachi"

// ## Question 4: Predict the output:

let a = 10;

function first() {
    let b = 20;

    console.log(a);
    console.log(b);
}

first();

console.log(a);

// a = 10, b = 20, a = 10;

// Question 5: Predict the output:


function check() {
    let score = 90;
}

check();

// console.log(score);

// reference error

//  Question 6: Predict the output:


let count = 5;

function increase() {
    count++;
}

increase();
increase();

console.log(count);
// 7

// Question 7: Predict the output:


let num = 50;

function demo() {
    let num = 100;
    console.log(num);
}

demo();

console.log(num);

// num = 100; num = 50;

// Question 8: Predict the output:


let x = 10;

function one() {
    let y = 20;

    function two() {
        console.log(x);
        console.log(y);
    }

    two();
}

one();

// x = 10, y = 20

// Question 9: Predict the output:

function outer() {
    let a = 5;

    function inner() {
        let b = 10;
        console.log(a + b);
    }

    inner();

    console.log(b);
}

outer();

// 15, reference error

// ## Question 10: Predict the output:

let name = "Ali";

function changeName() {
    name = "Ahmed";
    console.log(name)
}

changeName();

console.log(name);

// syntax error

// Question 11: Predict the output:


// let value = 10;

// function first() {
//     value = 20;

//     function second() {
//         let value = 30;
//         console.log(value);
//     }

//     second();

//     console.log(value);
// }

// first();

// console.log(value);
// ```

// ---

// ## Question 12

// **Predict the output:**

// ```js
// let a = 1;

// function test() {
//     console.log(a);

//     let a = 2;

//     console.log(a);
// }

// test();
// ```

// ---

// ## Question 13

// **Predict the output:**

// ```js
// var x = 10;

// function demo() {
//     console.log(x);

//     var x = 20;

//     console.log(x);
// }

// demo();

// console.log(x);
// ```

// ---

// ## Question 14

// **Predict the output:**

// ```js
// let total = 100;

// function calculate() {
//     total += 50;

//     function discount() {
//         total -= 20;
//     }

//     discount();
// }

// calculate();

// console.log(total);
// ```

// ---

// ## Question 15

// **Predict the output:**

// ```js
// let num = 5;

// function multiply() {
//     let num = 10;

//     function double() {
//         console.log(num * 2);
//     }

//     double();
// }

// multiply();

// console.log(num);
// ```

// ---

// # Expert Level (Interview Style)

// ---

// ## Question 16

// **Predict the output:**

// ```js
// let a = 100;

// function first() {
//     let a = 200;

//     function second() {
//         console.log(a);
//     }

//     second();
// }

// first();
// ```

// ---

// ## Question 17

// **Predict the output:**

// ```js
// let a = 10;

// function one() {
//     let a = 20;

//     function two() {
//         let a = 30;
//         console.log(a);
//     }

//     two();

//     console.log(a);
// }

// one();

// console.log(a);
// ```

// ---

// ## Question 18

// **Predict the output:**

// ```js
// var x = 1;

// function test() {
//     console.log(x);

//     if (true) {
//         var x = 2;
//     }

//     console.log(x);
// }

// test();

// console.log(x);
// ```

// ---

// ## Question 19

// **Predict the output:**

// ```js
// let value = 10;

// function update() {
//     value = value + 5;

//     let value = 50;

//     console.log(value);
// }

// update();
// ```

// ---

// ## Question 20

// **Predict the output:**

// ```js
// let x = 10;

// function outer() {
//     let y = 20;

//     function inner() {
//         let z = 30;

//         console.log(x);
//         console.log(y);
//         console.log(z);
//     }

//     inner();
// }

// outer();
// ```

// ---

// ## Challenge Questions (Without Running)

// 1. Global variable ko function ke andar modify karne se kya hota hai?
// 2. Agar local variable aur global variable ka naam same ho to kaunsa use hoga?
// 3. Kya outer function inner function ke variable ko access kar sakta hai?
// 4. Kya inner function outer function ke variable ko access kar sakta hai?
// 5. `var`, `let`, aur `const` me scope ke hisaab se kya difference hai?