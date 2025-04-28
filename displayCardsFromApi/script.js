const fakestore = document.getElementById("fakestore");
fakestore.addEventListener("click", () => {
    fakestoreapi();
});

async function fakestoreapi() {
    const output = await fetch("https://fakestoreapi.com/products");
    const data = await output.json();
    const container = document.getElementById("container");
    container.innerHTML = "";   

    data.forEach((x) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${x.image}" width="200px">
            <p> Price ₹ ${x.price}</p>
            <p> Title : ${x.title}</p>
        `;
        container.appendChild(card);
    });
}


const dummystore = document.getElementById("dummy");
dummystore.addEventListener("click", () => {
    dummystoreapi();
});

async function dummystoreapi() {
    const output = await fetch('https://dummyjson.com/products');  
    const data = await output.json();
    console.log(data);

    const container = document.getElementById("container");
    container.innerHTML = "";  

    data.products.forEach((x) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${x.images[0]}" width="200px">   
            <p> Price ₹ ${x.price}</p>
            <p> Title : ${x.title}</p>   
        `;
        container.appendChild(card);
    });
}
