// // Promise
// let promise = new Promise((res, reject) => {
//     res()
//     // reject()
//     // setTimeout(()=>{
//     //     res()
//     // },5000)

// })
// // console.log(promise)
// promise.then(() => {
//     console.log("Done")  //call res()
// }).catch(() => {
//     console.log("error");  //call reject()
// })

// function step1() {
//     return new Promise((res,reject) => {
//         setTimeout(() => {
//             console.log("selected");
//             res()
//             // reject()

//         }, 5000)

//     })

// }

// function step2() {
//     return new Promise((res,reject) => {
//         setTimeout(() => {
//             console.log("Caption");
//             res()
//             // reject()

//         }, 4000)

//     })

// }

// step1().then(() => {
//     return step2().then(() => {

//     })
// })

//  async function call(){
//    await step1()
//   await  step2()
// }
// call()


// Api
// fetch('https://dummyjson.com/image/150').then((data)=>{
// console.log(data);
// return data.json()

// }).then((val)=>{
//     console.log("val")
// })
// .catch((error)=>{
//     console.log(error)
// })

fetch('https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter')
.then(response => response.blob()) // Convert response to blob
.then(blob => {
  console.log('Fetched image blob:', blob);
})