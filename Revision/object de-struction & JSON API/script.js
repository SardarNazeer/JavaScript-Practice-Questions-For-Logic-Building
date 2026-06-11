// Object de-structure and JSON API 

// Object Destructuring in JavaScript

// Object destructuring ka matlab hai object ke andar ki 
// values ko nikal kar alag variables me store karna.

// normal way 

let user = {
    name: "sardar",
    age: 18,
    email: "sardar@gmail.com",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);

// Destructuring way

const {name, age, email} = user;

// JSON > JavaScript Object Notation

// Ye data exchange format hai.
// Server aur client ke beech data bhejne ke liye use hota hai.

// JSON > string format me huti hai keys or values dono 

// {
//     "name": "sardar",
//     "age": "19",
//     "email": "sardar@gmail.com",
// }

// JSON.stringify() >JavaScript object ko JSON string me convert karta hai.

// JSON.parse() > JSON string ko JavaScript object me convert karta hai.

// API > Application Programming Interface
// Ek system se dusre system tak data lene ya bhejne ka rasta.

// API se data fetch karna, javaScript me fetch() use hota hai.

// Example:

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     });


// Object Destructuring + JSON + API (Hard Practice Set)

// Basic Destructuring Logic

// 1.Statement:Extract `name` and `age` from the object.

const user = {
    name: "Ali",
    age: 22,
    city: "Karachi"
};

const {name,age} = user;

console.log(name);
console.log(age);

// ### 2

// **Statement:** Rename `title` → `productName`, `price` → `productPrice`.

// ```javascript id="q2"
// const product = {
//     title: "Mobile",
//     price: 30000
// };
// ```

// ---

// ### 3

// **Statement:** If `country` does not exist, set default value `"Pakistan"`.

// ```javascript id="q3"
// const user = {
//     name: "Ahmed"
// };
// ```

// ---

// ### 4

// **Statement:** Predict output.

// ```javascript id="q4"
// const obj = {
//     name: "Ali"
// };

// const { name } = obj;

// console.log(name);
// ```

// ---

// ### 5

// **Statement:** Predict output.

// ```javascript id="q5"
// const obj = {
//     name: "Ali"
// };

// const { age = 18 } = obj;

// console.log(age);
// ```

// ---

// ## 🟡 Nested Destructuring (Important)

// ### 6

// **Statement:** Extract `city` from nested object.

// ```javascript id="q6"
// const user = {
//     name: "Ali",
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };
// ```

// ---

// ### 7

// **Statement:** Extract `country` as `nation`.

// ```javascript id="q7"
// const user = {
//     address: {
//         country: "Pakistan"
//     }
// };
// ```

// ---

// ### 8

// **Statement:** Predict output.

// ```javascript id="q8"
// const user = {
//     address: {
//         city: "Lahore"
//     }
// };

// const {
//     address: { city }
// } = user;

// console.log(city);
// ```

// ---

// ### 9 (Tricky)

// **Statement:** Predict output.

// ```javascript id="q9"
// const user = {
//     address: {
//         city: "Karachi"
//     }
// };

// const { city } = user.address;

// console.log(city);
// ```

// ---

// ## 🔵 Array + Destructuring Logic

// ### 10

// **Statement:** Extract first and second element.

// ```javascript id="q10"
// const colors = ["Red", "Blue", "Green"];
// ```

// ---

// ### 11

// **Statement:** Predict output.

// ```javascript id="q11"
// const nums = [10, 20, 30];

// const [a, b] = nums;

// console.log(a, b);
// ```

// ---

// ### 12

// **Statement:** Extract last element as `last`.

// ```javascript id="q12"
// const fruits = ["Apple", "Banana", "Mango"];
// ```

// ---

// ### 13 (Tricky)

// **Statement:** Predict output.

// ```javascript id="q13"
// const arr = [1, 2, 3];

// const [x, , z] = arr;

// console.log(x, z);
// ```

// ---

// ## 🟣 JSON Concepts

// ### 14

// **Statement:** Convert object to JSON string.

// ```javascript id="q14"
// const user = {
//     name: "Ali",
//     age: 22
// };
// ```

// ---

// ### 15

// **Statement:** Convert JSON string to object.

// ```javascript id="q15"
// const data = '{"name":"Ahmed","city":"Lahore"}';
// ```

// ---

// ### 16

// **Statement:** Predict output type.

// ```javascript id="q16"
// const obj = { name: "Ali" };
// const json = JSON.stringify(obj);

// console.log(typeof json);
// ```

// ---

// ### 17

// **Statement:** Predict output type.

// ```javascript id="q17"
// const data = '{"age":25}';

// const obj = JSON.parse(data);

// console.log(typeof obj);
// ```

// ---

// ### 18 (Tricky)

// **Statement:** Predict output.

// ```javascript id="q18"
// const obj = {
//     name: "Ali"
// };

// const json = JSON.stringify(obj);

// console.log(json.name);
// ```

// ---

// ## 🔴 API + Real World Logic

// ### 19

// **Statement:** Extract `name` from API response.

// ```javascript id="q19"
// const response = {
//     id: 1,
//     name: "Leanne Graham",
//     email: "test@example.com"
// };
// ```

// ---

// ### 20

// **Statement:** Nested destructuring: extract `email`.

// ```javascript id="q20"
// const response = {
//     user: {
//         name: "Ali",
//         email: "ali@mail.com"
//     }
// };
// ```

// ---

// ### 21

// **Statement:** Predict output.

// ```javascript id="q21"
// const response = {
//     user: {
//         name: "Ali"
//     }
// };

// const { user: { name } } = response;

// console.log(name);
// ```

// ---

// ### 22 (Important Error Question)

// **Statement:** Predict output / error.

// ```javascript id="q22"
// const user = {
//     name: "Ali"
// };

// const { age } = user;

// console.log(age);
// ```

// ---

// ### 23 (Tricky)

// **Statement:** Predict output.

// ```javascript id="q23"
// const user = {
//     name: "Ali"
// };

// const { name: userName } = user;

// console.log(name);
// ```

// ---

// ### 24

// **Statement:** Extract second user's name.

// ```javascript id="q24"
// const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Ahmed" }
// ];
// ```

// ---

// ### 25 (Interview Level)

// **Statement:** Predict output.

// ```javascript id="q25"
// const response = [
//     { id: 1, title: "React" },
//     { id: 2, title: "JS" }
// ];

// const [, second] = response;

// console.log(second.title);
// ```

// ---

// ## ⚫ Expert Level Mix (Logic Killer)

// ### 26

// **Statement:** Predict output.

// ```javascript id="q26"
// const user = {
//     name: "Ali",
//     address: {
//         city: "Karachi"
//     }
// };

// const {
//     address: { city: myCity }
// } = user;

// console.log(myCity);
// ```

// ---

// ### 27

// **Statement:** Predict output.

// ```javascript id="q27"
// const data = '{"name":"Ali"}';

// const obj = JSON.parse(data);

// const { name } = obj;

// console.log(name);
// ```

// ---

// ### 28

// **Statement:** Predict output.

// ```javascript id="q28"
// const obj = { name: "Ali" };

// const json = JSON.stringify(obj);

// console.log(json.name);
// ```

// ---

// ### 29

// **Statement:** Predict output.

// ```javascript id="q29"
// const user = {
//     name: "Ali"
// };

// const { age = 20 } = user;

// console.log(age);
// ```

// ---

// ### 30 (Final Boss 🔥)

// **Statement:** Predict output.

// ```javascript id="q30"
// const response = {
//     data: {
//         user: {
//             name: "Ali",
//             details: {
//                 city: "Karachi"
//             }
//         }
//     }
// };

// const {
//     data: {
//         user: {
//             details: { city }
//         }
//     }
// } = response;

// console.log(city);
// ```

// ---

// ## 🧠 Agar tum ye 30 questions solve kar lo:

// Tum automatically:

// * API handling samajh jaoge
// * React props destructuring easy ho jayega
// * JSON handling clear ho jayegi
// * Interview me 90% JS questions cover ho jayenge

// ---

// Agar chaho to main next step me tumhe:
// 👉 **React props + destructuring real project level questions**
// 👉 ya **API + async/await interview tricky questions**

// bhi karwa sakta hoon.
