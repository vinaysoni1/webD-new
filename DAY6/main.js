console.log("Hello World")
// let a =10;
// console.log(a)
// let b = 20;
// {
//     var b = 20;
//     let b = 20;
//     const c = 30;
// }
// console.log(a)
// console.log(b)
// console.log(c)

// if(true) Output:10
// if(false){ Output: undefined   
// var a = 10;
// }else{
//     console.log("false")
// }
//     console.log(a)



// function add(){
//     let a = 10;
// }
// console.log(a)
// add()    

// object
// let obj = {
//    name:"vinay soni",
//    age:22,
//    city: "jabalpur",
//    sum: function(a,b){
//     return a+b;
//    }
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)
// console.log(obj.sum(12,12))

// this keyword
// console.log(this)
// console.log(this === window) // true   


// 'use strict'
// function myFunction(){
//     console.log(this)
// }
// myFunction()

// var name="vinay"
// var age = 24
// let obj = {
//    name:"vinay soni",
//    age:22,
//    city: "jabalpur",

//    sum: function(){
//     console.log(this.age)
//    } 
// }
// obj.sum()

function outer(){
    let username="vinay"
    function inner(){
        console.log(username)
    }
    inner()
}
outer()