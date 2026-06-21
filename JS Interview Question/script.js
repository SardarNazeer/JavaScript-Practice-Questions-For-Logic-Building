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

// 25. Use a do while loop prints number from 5 to 1.

let doNum = 5;

do {
    console.log(doNum);
    doNum--;
} while (doNum > 0);

// 26. Create a for loop that calculates the factorial of 5. 

let factNum = 5;
let factRes = 1;

for(let i = 1; i<= factNum; i++){
    factRes = factRes * i;
}

console.log(factRes);

// 27. Write a nested loop to print 3x3 grid of numbers.

var hold = 1;

for(let i = 1; i <=3; i++){
    let str = "";
    for(let j = 1; j<=3; j++){
        str += `${hold}`;
        hold++;
    }
    console.log(str);
}

// 28. use a for loop to reverse an array.

// 1st method 

let reverseArray = [1,2,3,4];

for(let i = reverseArray.length-1; i>= 0; i--){
    console.log(reverseArray[i]);
}

// 2nd method 

let array = [1,2,3,4];

let reversed = [];

for (let i = array.length-1; i >= 0; i--) {
    reversed.push(array[i]);
}

console.log(reversed);

// 3rd method 

let array3 = [1,2,3,4,5];

for (let i = 0; i < array3.length/2; i++) {
    let temp = array3[i];
    array3[i] = array3[array3.length - 1 - i];
    array3[array3.length-1-i] = temp;    
}

console.log(array3);

// 29. Write a while loop that logs number from 1 to 100 divisble by 5.

let Div5Num = 1;
while (Div5Num<101) {
    if (Div5Num % 5 === 0) {
        console.log(Div5Num);
    }
    Div5Num++;
}

// 30. use a for in loop to iterate over an object and log its value.

let obj = {
    name: "sardar",
    age: 18,
    email: "sardar@gmail.com"
};

for(let key in obj){
    console.log(key)
}


// Arrays 

// 31. Create an array of your top 5 favourite movies and log in.

let movies = ["animal", "tere naam", "kabir singh", "hera phiri", "hungama"];

console.log(movies);

movies.forEach(function(value){
    console.log(value);
})

// 32. find and log the second element of an array. 

console.log(movies[1]);

// 33. Add to new elements to the start of an array using .unshift().

movies.unshift("don","kick");

console.log(movies);

// 34. Remove the last element of an array and log the updated array. 

movies.pop();

console.log(movies);

// 35. use .slice() to extract the first three elements of an array.

let part = movies.slice(0,3);

console.log(part);

// 36. find the index of an specific element in an array using .indexOf().

console.log(movies.indexOf("kick"));

// 37. check if an value exist in an array using .includes().

console.log(movies.includes("main"));

// 38. Combines two array [1,2] and [3,4] using .concat().

let arr1 = [1,2];
let arr2 = [3,4];

let concatArr = arr1.concat(arr2);

console.log(concatArr);

// 39. Sort an array of numbers [5,2,9,1,3] in ascending order.

let sortArr = [5,2,9,1,3];

sortArr.sort();

console.log(sortArr);

// 2nd method bubble sort 

let sortArr2 = [33,21,67,12,11];

for(let j = 0; j<sortArr2.length; j++){
    for (let i = 0; i < sortArr2.length - 1; i++) {
        if (sortArr2[i] > sortArr2[i+1]) {
            let temp = sortArr2[i];
            sortArr2[i] = sortArr2[i + 1];
            sortArr2[i+1] = temp;
        }
        
    }
}

console.log(sortArr2);

// 40. Write a programs that creates a copy of an array without mutating the original.