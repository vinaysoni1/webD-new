// let box = document.querySelectorAll("button")
// let turn0=true
// let msgBox = document.querySelector("p")
// let win =[[0, 1, 2],
//             [0, 3, 6],
//             [0, 4, 8],
//             [1, 4, 7],
//             [2, 5, 8],
//             [2, 4, 6],
//             [3, 4, 5],
//             [6, 7, 8]];
// for(let a of box){
//     a.addEventListener("click", ()=>{
//         console.log("hey")
//         // if(a.innerText!=""){
//         //     return;
//         // }
//         if(turn0==true){
//             a.innerText="0"
//             turn0=false
//             a.disabled=true
//         }
//         else{
//             a.innerText="X"
//             turn0=true
//             a.disabled=true
//         }
//     })
// }
// function win(){
//     for(let pattern of win){
//         let x = box[pattern[0].innerText]
//         let y = box[pattern[1].innerText]
//         let z = box[pattern[2].innerText]
//         if(x!="" && y!="" && z!=""){
//             if(x==y && y==z){
//                 msgBox.innerText=x+ "Aap jeet Gaye"
//             }
//         }
//     }
//     win();
// }
// // win();