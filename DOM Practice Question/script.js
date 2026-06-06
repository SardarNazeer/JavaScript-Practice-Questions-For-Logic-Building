// JavaScript DOM Practice Questions

// # JavaScript DOM Practice Questions (Logic Building)

// ## Basic DOM Selection

// 1. Select an element using getElementById().

let div = document.getElementById(myDiv);
console.log(div);

// 2. Select multiple elements using querySelectorAll().

let allDiv = document.querySelectorAll("div");

// 3. Change the text of a paragraph.

let para = document.querySelector("p");

para.textContent = "my para with js";

// 4. Change the background color of a div.

let divBgCol = document.querySelector(".change-color");

divBgCol.style.backgroundColor = "red";
divBgCol.style.color = "white";


// 5. Add a new class to an element.

let newClassDiv = document.querySelector(".newClass");
newClassDiv.classList.add("myClass");

// 6. Remove a class from an element.

let removeClassDiv = document.querySelector(".removeClass");
removeClassDiv.classList.remove("removeClass");

// 7. Toggle a class using classList.toggle().

let toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("toggle");
})

// 8. Change image source dynamically.



// 9. Change heading color on button click.

let heading = document.querySelector(".heading");
let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    heading.style.color = "green";
})

// 10. Hide and show an element using JavaScript.

let hideShowDiv = document.querySelector(".hide");
let hideShowBtn = document.querySelector(".hideShow");

hideShowBtn.addEventListener("click",()=>{
    hideShowDiv.classList.toggle("hide-show");
})

// ## Event Handling Practice

// 11. Create a button click event.
// 12. Show an alert when a button is clicked.

let newButton = document.querySelector(".newBtn");

newButton.addEventListener("click",()=>{
    alert("button is clicked");
})

// 13. Change text when a button is pressed.
// 14. Change background color on click.

let changeDivColor = document.querySelector(".divColor");
let changeColorBtn = document.querySelector(".changeColor");

changeColorBtn.addEventListener("click",()=>{
    changeDivColor.style.color = "blue";
    changeDivColor.style.backgroundColor = "black";
})


// 15. Display mouse coordinates on mouse move.

window.addEventListener("mousemove",(e)=>{
    console.log(e.clientX)
})

// 16. Detect keyboard key press.
// 17. Show pressed key on screen.

window.addEventListener("keypress",(e)=>{
    console.log(e.key);

    let h1 = document.createElement("h1");
    h1.textContent = e.key;

    document.body.appendChild(h1);

})


// 18. Create a double-click event.

let doubleClickBtn = document.querySelector(".dblBtn");

doubleClickBtn.addEventListener("dblclick",()=>{
    alert("double click");
})

// 19. Detect right-click event.
// 20. Disable right-click on webpage.

window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    // alert("right click detected");
})



// ## Input & Forms Practice

// 21. Get value from an input field.



// 22. Show input value live while typing.
// 23. Create a character counter.
// 24. Validate empty input fields.
// 25. Validate email format.
// 26. Validate password length.
// 27. Show/hide password functionality.
// 28. Create a login form validation.
// 29. Create a signup form validation.
// 30. Reset form using JavaScript.

// ## DOM Manipulation Practice

// 31. Create an element dynamically.
// 32. Append a new element to the DOM.
// 33. Remove an element dynamically.
// 34. Replace an existing element.
// 35. Insert an element before another element.
// 36. Insert an element after another element.
// 37. Clone an element.
// 38. Count total child elements.
// 39. Access parent element.
// 40. Access sibling elements.

// ## Lists & Arrays with DOM

// 41. Create a dynamic todo list.
// 42. Add todo items dynamically.
// 43. Delete todo items.
// 44. Mark todo as completed.
// 45. Create a shopping list app.
// 46. Filter completed tasks.
// 47. Count total tasks.
// 48. Count completed tasks.
// 49. Create a notes app.
// 50. Search items in a list.

// ## Styling & Animation Practice

// 51. Change element style dynamically.
// 52. Increase font size using buttons.
// 53. Create dark mode toggle.
// 54. Create light/dark theme switcher.
// 55. Animate a box on button click.
// 56. Move an element left/right.
// 57. Create a loading spinner.
// 58. Create a progress bar.
// 59. Create image hover effects.
// 60. Build a popup modal.

// ## Timer & Clock Projects

// 61. Create a digital clock.
// 62. Create a countdown timer.
// 63. Create a stopwatch.
// 64. Start and stop a timer.
// 65. Reset a timer.
// 66. Create an alarm clock UI.
// 67. Show current date dynamically.
// 68. Create a typing speed tester.
// 69. Create a random quote generator.
// 70. Create a random color generator.

// ## Advanced DOM Logic Building

// 71. Create an image slider.
// 72. Build a carousel manually.
// 73. Create tab switching functionality.
// 74. Create an accordion UI.
// 75. Build a dropdown menu.
// 76. Build a sidebar toggle.
// 77. Create infinite scrolling.
// 78. Detect scroll position.
// 79. Create a sticky navbar.
// 80. Build a responsive navbar menu.

// ## API + DOM Practice

// 81. Fetch users from an API and display them.
// 82. Fetch weather data and show it in UI.
// 83. Build a GitHub profile finder.
// 84. Build a movie search app.
// 85. Build a country search app.
// 86. Create a random user generator.
// 87. Build a joke generator app.
// 88. Create a live search filter.
// 89. Display API data in cards.
// 90. Handle API loading and errors.

// ## Mini Projects for Logic Building

// 91. Todo App
// 92. Notes App
// 93. Calculator
// 94. Weather App
// 95. Quiz App
// 96. Expense Tracker
// 97. Password Generator
// 98. BMI Calculator
// 99. Memory Card Game
// 100. Tic Tac Toe Game

// ## Advanced Challenge Questions

// 101. Build drag and drop functionality.
// 102. Build custom dropdown without HTML select.
// 103. Build a custom video player.
// 104. Create a file upload preview system.
// 105. Build a chat UI.
// 106. Build a Kanban board.
// 107. Create a virtual keyboard.
// 108. Build a markdown previewer.
// 109. Build a mini code editor.
// 110. Create your own mini frontend framework logic.

