// Most Asked JS Interview Question  

// beginner question 

// basic console usage 

// 1. log your name and favourite hobby in the console. 

console.log("Sardar Nazeer","Favourite hobby: Playing cricket");

// 2. Perform and log the result of 45*2-10.

console.log(45 * 2 - 10);

// 3. Use console.log() to display the current year.

const date = new Date().getFullYear();

console.log(date)

// 4. Create two variable for first and last nama, Concatenant and log them. 

let firstName = "Sardar";
let lastName = "Nazeer";

console.log(firstName + lastName);

// 5. Track the value of a variable by logging it before and after updating. 

let num = 18;

console.log(num);

num = 16;

console.log(num);

// 6. Use console.error() to simulate an error message. 

console.error("error");

// 7. Log the square of a number 12 to the console. 

console.log(12*12);

// 8. Print the type of a variable holding the value true. 

let userLoggedIn = true;

console.log(typeof(userLoggedIn));

// 9. Create a variable holding your age and log whether its greater than 18.

let age = 24;

if (age> 18) {
    console.log("greater than 18");
} else{
    console.log("not greater than 18");
}

// 10. log the result of 100/0 and observe the output. 

console.log(100 / 0);


// Variables and Data Types 

// 11. Declare a variable using let and log it value;

let myVar = "let variable";

console.log(myVar);

// 12. Create a constant to store the value of PI and log it

const piValue = 3.21;

console.log(piValue);

// 13. Reassigned a value to let and log the result. 

let num2 = 22;

num2 = 18;

console.log(num2);

// 14. check the type of null and log it.

let myName = null;

console.log(typeof(myName));

// 15. Create a variable with number as a string and log its type.

let myNum = "22";

console.log(typeof(myNum));

// 16. use typeof to check the type of a booelan varibale.

let isAdmin = false;

console.log(typeof(isAdmin));

// 17. Create a three variable of type string number and boolean and log their values.

let myStr = "String";
let myNum2 = 24;
let myLogin = true;

console.log(myStr, myNum2, myLogin);

// 18. Declare a variable without assigning a value log its type. 

let myAge;

console.log(myAge);

// 19. Create a variable with undefined and log its type.

let myNewVar = undefined;

console.log(typeof(myNewVar));

// 20. Use const to create an array. Try reassignib the array and observe the error.

const myArr = [1,2,3,4];

// myArr = [3,4,5,6,7];

console.log(myArr);


// Loops. 10 Question. 

// 21. Write a for loop to print number from 1 to 100.

for(let i = 1; i<=100; i++){
    console.log(i);
}

// 22. Use a while loop to sum the numbers from 1 to 10.

let whileNum = 1;
let rangeNum = 0;
while(whileNum < 11){
    rangeNum += whileNum;
    whileNum++;
}
    console.log(rangeNum);

// 23. create a for of loop to log each character of the string "JavaScript".

let str = "javascript";

for(let char of str){
    console.log(char);
}

// 24. Write a for loop that skips even number between 1 to 20.

for(let i = 1; i <= 20; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 25. 

// 26. 

// 27. 

// 28. 

// 29. 

// 30. 