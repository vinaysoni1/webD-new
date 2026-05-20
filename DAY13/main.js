fetch("https://dummyjson.com/products").then((res)=>{

    return res.json()
}) .then((data)=>{
   let body = document.querySelector("body");
   let products = data.products;

    products.map((a)=>{
        console.log(a);
        body.innerHTML += `<div style="border:1px solid black; margin:10px; padding:10px;"
        width="20px" height="20px" border-radius
        :10px; display:flex;">
        <img src="${a.thumbnail}" >
        <h2>${a.title}</h2>
        <p>${a.description}</p>
        <p>Price: ${a.price}$</p>
        <button style="padding:10px; background-color:#c0a5b457; color:black; font-weight:bolder; border:none; border-radius:5px; shadow:0 2px 4px rgba(0,0,0,0.1);">Buy Now</button>
    </div>`
       
   })
})