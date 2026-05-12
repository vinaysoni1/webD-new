// let h1 = document.querySelectorAll("h1")
// console.log(h1)


// let name = prompt("What is your name?")
// let h1 = document.querySelector("h1")
// h1.innerText = `Hello, ${name}!`

let inp =document.querySelector("input")
let h1 = document.querySelector("h1")
let btn = document.querySelector("button")
btn.addEventListener("click",function(e){
    console.log("hello guys")
    h1.innerText = `Hello, ${e.target.value}!`
})
// inp.addEventListener("input", function(e){
//    console.log(e.target.value)
//    
// })