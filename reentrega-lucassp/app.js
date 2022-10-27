const shopContent = document.getElementById("shopContent");
const verCarrito= document.getElementById("verCarrito")
const modalContainer= document.getElementById("modal-container");
const cantidadCarrito= document.getElementById("cantidadCarrito");
const productos= [
    {id: 1, nombre:"Bali",precio: 2500, img: "./img/bali.png", cantidad: 1},
    {id: 2, nombre:"Bresh",precio: 2200, img: "./img/bresh.jpg",cantidad: 1},
    {id: 3, nombre:"Bayside",precio: 2500, img: "./img/bayside.jpg" ,cantidad: 1,},
    {id: 4, nombre:"Guns N Roses",precio: 40000, img: "./img/gunsnroses.jpg",cantidad: 1 },
    {id: 5, nombre:"Moscu",precio: 2500, img: "./img/moscu.png",cantidad: 1},
    {id: 6, nombre:"Jet",precio: 10000, img: "./img/jet.jpeg",cantidad: 1 },
];

let carrito= [];
productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className="card";
content.innerHTML=`
<img src="${product.img}"
<h3>${product.nombre}</h3>
<p class="price">$ ${product.precio}</p> 
`
shopContent.append(content)
let comprar = document.createElement("button")
comprar.innerText="Agregar al carrito"
comprar.className="Agregar"
content.append(comprar)

 comprar.addEventListener("click", ()=>{
    const repeat= carrito.some((repeatProduct)=> repeatProduct.id=== product.id);
    if (repeat){  
    carrito.map((prod)=>{
        if(prod.id === product.id){
            prod.cantidad++; 
        }
    })
}else{ 
    carrito.push({
        id:product.id,
        img:product.img,
        nombre:product.nombre,
        precio:product.precio,
        cantidad:product.cantidad,
    });
}
carritoCounter();

 })
}
);
