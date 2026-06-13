// IIFE (immedietly invoked function expression)

// IIFE ka full form hai Immediately Invoked Function Expression.
// Iska matlab hai ke function ko define karte hi foran execute (call) kar diya jata hai.

(function(){
    console.log("IIFE chal gaya");
})();

// IIFE KO PATA NAHI HUTA CONTEXT ROKNA KAHA PE HAI 
// rokne ke liye semicolon lagayenge iife ke end me 

// IIFE use kyun karte hain?

// Code ko turant execute karne ke liye
// Variables ko private rakhne ke liye
// Global scope ko pollute hone se bachane ke liye

(function(){
    let message = "secret data";
    console.log(message);
})();

// console.log(message);  // refrence error isko bahir nahi access kar skte

// with paramaters 

(function(name){
    console.log("hello ", name)
})("sardar");

// IIFE (Immediately Invoked Function Expression) JavaScript ka aisa function
// expression hota hai jo create hote hi immediately execute ho jata hai. 
// Isay mostly private scope create karne 
// aur global namespace ko pollute hone se bachane ke liye use kiya jata tha

// IIFE Practice Questions (Statement Wise – English)

// 1. Write an IIFE that displays `"Learning JavaScript"` in the console.

(function (){
    console.log("learning javaScript");
})();

// 2. Write an IIFE that calculates and prints the sum of `45` and `55`.

(function (){
    let num1 = 45;
    let num2 = 55;
    let calculates = num1 + num2;
    console.log("result ", calculates);
})();

// 3. Write an IIFE that accepts a user's name as an argument and prints:

(function (name){
    console.log("hello " + name);
})("ali");

// 4. Write an IIFE that takes a number and prints whether 
// it is **positive**, **negative**, or **zero**.

(function (number){
    if (number<0) {
        console.log("it is negative: ", number);
    } else if(number>0){
        console.log("it is positive: ", number);
    } else {
        console.log("it is zero: ", number);
    }
})(0);

// 5. Write an IIFE that takes a number and determines whether it is **even** or **odd**.

(function(number){
    if (number % 2 === 0) {
        console.log("it is even: ", number);
    } else {
        console.log("it is odd: ", number);
    }
})(19);

// 6. Write an IIFE that receives a number and prints its **square** and **cube**.

(function(number){
    let square = number * number;
    let cube = number * number * number;
    console.log(square, cube);
})(6);

// 7. Write an IIFE that finds the **greater value** between two numbers.

(function(num1,num2){
    if (num1 > num2) {
        console.log(num1, " is greater than ", num2);
    } else {
        console.log(num2, " is greater than ", num1);
    }
})(29,19);

// 8. Write an IIFE that checks whether a person is eligible to vote (age ≥ 18).

(function(age){
    if (age => 18) {
        console.log("eligible");
    } else if(age < 18){
        console.log("not eligible");
    }
})(16);

// 9. Write an IIFE that takes three numbers and prints the **largest number**.

(function(num1,num2,num3){
    if (num1 > num2 && num1 > num3) {
        console.log(num1, " num1 is greater than both number");
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2, " num2 is greater than both number");
    } else {
        console.log(num3, " num3 is greater than both number");
    }
})(23,20,19);

// 10. Write an IIFE that calculates the **factorial** of a given number.

(function(num){

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
        console.log(fact);
})(5);

// 11. Write an IIFE that determines whether a number is a **prime number**.

(function(prime){
    if (prime % 2 !== 0) {
        console.log("number is prime");
    } else {
        console.log("not a prime number");
    }
})(17);

// 12. Write an IIFE that reverses a given string.

// ---

// 13. Write an IIFE that counts the total number of **vowels** in a string.

// ---

// 14. Write an IIFE that calculates the **sum of all elements** in an array.

// Example:

// ```javascript
// [5, 10, 15, 20]
// ```

// ---

// 15. Write an IIFE that finds the **smallest element** in an array.

// ---

// 16. Write an IIFE that counts how many **even numbers** exist in an array.

// ---

// ## Problem Solving Level

// 17. Write an IIFE that checks whether a given string is a **palindrome**.

// Example:

// ```text
// madam → Palindrome
// hello → Not Palindrome
// ```

// ---

// 18. Write an IIFE that removes **duplicate values** from an array.

// Example:

// ```javascript
// [1, 2, 2, 3, 4, 4, 5]
// ```

// ---

// 19. Write an IIFE that finds the **second largest number** in an array.

// Example:

// ```javascript
// [10, 45, 22, 90, 65]
// ```

// ---

// 20. Write an IIFE that counts how many times a specific element appears in an array.

// Example:

// ```javascript
// Array: [1, 2, 3, 2, 4, 2]
// Target: 2
// ```

// ---

// 21. Write an IIFE that checks whether **all elements** in an array are positive numbers.

// ---

// 22. Write an IIFE that returns the **longest word** from a sentence.

// Example:

// ```text
// "I love learning JavaScript programming"
// ```

// ---

// 23. Write an IIFE that converts the **first letter of every word** in a sentence to uppercase.

// Example:

// ```text
// "javascript is awesome"
// ```

// Output:

// ```text
// "JavaScript Is Awesome"
// ```

// ---

// 24. Write an IIFE that finds the **missing number** from a sequence of numbers from `1` to `n`.

// Example:

// ```javascript
// [1, 2, 3, 5]
// ```

// Missing Number:

// ```text
// 4
// ```

// ---

// 25. Write an IIFE that moves all **zero values to the end** of an array while maintaining the order of other elements.

// Example:

// ```javascript
// [0, 1, 0, 3, 12]
// ```

// Output:

// ```javascript
// [1, 3, 12, 0, 0]
// ```

// ---

// ## Advanced Problem-Solving Questions

// 26. Write an IIFE that determines whether two strings are **anagrams** of each other.

// Example:

// ```text
// listen → silent
// ```

// ---

// 27. Write an IIFE that finds the **first non-repeating character** in a string.

// Example:

// ```text
// "javascript"
// ```

// ---

// 28. Write an IIFE that groups array elements based on whether they are **even** or **odd**.

// Example:

// ```javascript
// [1, 2, 3, 4, 5, 6]
// ```

// Output:

// ```javascript
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
// ```

// ---

// 29. Write an IIFE that rotates an array to the **right by k positions**.

// Example:

// ```javascript
// Array: [1, 2, 3, 4, 5]
// k = 2
// ```

// Output:

// ```javascript
// [4, 5, 1, 2, 3]
// ```

// ---

// 30. Write an IIFE that creates a **private counter** using closure.

// Requirements:

// * `increment()`
// * `decrement()`
// * `getValue()`

// The counter value should not be directly accessible from outside.

// ---

// ### Challenge Rule

// For every question, use one of the following formats:

// ```javascript
// (function () {
//    // Your logic here
// })();
// ```

// OR

// ```javascript
// const result = (function () {
//    // Your logic here
//    return value;
// })();

// console.log(result);
// ```