// let b = document.querySelector("#addButton")
// let b = document.getElementById("addButton")
let b = document.getElementsByClassName("addButton")
let body = document.querySelector("body")
b.addEventListener("click",function(){
    console.log("Button Clicked")
    body.style.backgroundColor = "yellow"
})


