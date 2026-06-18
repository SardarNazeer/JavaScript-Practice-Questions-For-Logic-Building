let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");


boxes.forEach(function(button){
    button.addEventListener("click",function(e){
        if (e.target.id === "black") {
        body.style.backgroundColor = e.target.id;   
        } if (e.target.id === "yellow") {
        body.style.backgroundColor = e.target.id;   
        } if (e.target.id === "green") {
        body.style.backgroundColor = e.target.id;   
        } if (e.target.id === "blue") {
        body.style.backgroundColor = e.target.id;   
        } 
    })
})