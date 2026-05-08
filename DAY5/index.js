// Hoisting

// var sum = () =>{
//     console.log("Hello World");
// }
// sum();

// let a;
// console.log(a);
// a=10
var sum = () =>{
    console.log("Hello World");
}
sum()
var sum = () =>{
    console.log("Hello World");
}

// sume()
// let sume = () =>{
//     console.log("Hello World");
// }


let arr = [1,2,3,4,5, "Hello World"];
console.log(arr.length);
arr.push(6)
console.log(arr);
arr.pop(arr)
console.log(arr);
console.log(arr.toString());
console.log(arr.join("-"));
console.log(arr.slice(0,3));
console.log(arr.splice(0,3));
console.log(arr);
arr.unshift(0);
console.log(arr, "unshift");
arr.shift();
console.log(arr, "shift");

let arr1 = [1,2,3,4,5];
console.log(arr1.includes(3));
console.log(arr1.includes(6));


// arr iteration
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);

let data =arr1.find(function(value){{
    return value > 3;
}});
console.log(data);

arr1.forEach(function(a,b,c){
    console.log(c);
});
console.log(data , "find");

let data1 = [10,20,30,40,50];
let val = data1.forEach((a)=>{
    return a*2;
})
console.log(val);

 data1.map((a,b,c)=>{
    console.log(a ,b,c);
})
console.log(data1 , "map");

// filter
let data2 = [10,20,30,40,50];
let val1 = data2.filter((a,b,c)=>{
    return a > 30;
})  
console.log(val1 , "filter");

// array sort

let data3 = [40, 100, 1, 5, 25, 10];
data3.sort(function(a, b){return a - b});
console.log(data3 , "sort");

let data4 = ["Banana", "Orange", "Apple", "Mango"];
data4.sort();
console.log(data4 , "sort string");



let data5 = [1,2,3,4,5];
let add = data5.reduce((a,b,c,d)=>{
    // return a+b;
    console.log(a);
    console.log(b);
    return a+b;
})
console.log(add , "reduce");