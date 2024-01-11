const productos = [
    {
        cantidad: " " , 
        id: "a1",
        categoria: "vestimenta",
        nombre: "short",
        descripcion: "short de dama",
        precio: 120, 
        stock: 15,
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "a2",
        categoria: "vestimenta",
        nombre: "calza",
        descripcion: "calza de dama",
        precio: 120, 
        stock: 2,
        img: "../public/img/carrito.png"
    },
    {        
        cantidad: " " , 
        id: "a3",
        categoria: "vestimenta",
        nombre: "sombrero",
        descripcion: "sombrero de paja",
        precio: 660, 
        stock: 23,
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "b1",
        categoria: "calzado",
        nombre: "zapatillas",
        descripcion: "zapatillas de dama",
        precio: 1300, 
        stock: 0,
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "b2",
        categoria: "calzado",
        nombre: "botas",
        descripcion: "botas de dama",
        precio: 340, 
        stock: 3,
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "b3",
        categoria: "calzado",
        nombre: "medias",
        descripcion: "medias nike",
        precio: 340, 
        stock: 23,
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "c1",
        categoria: "articulos",
        nombre: "pelota",
        descripcion: "pelota de futbol",
        precio: 55, 
        stock: 19, 
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "c2",
        categoria: "articulos",
        nombre: "pelota",
        descripcion: "pelota de basketball",
        precio: 55, 
        stock: 9, 
        img: "../public/img/carrito.png"
    },
    {
        cantidad: " " , 
        id: "c3",
        categoria: "articulos",
        nombre: "pelota",
        descripcion: "pelota de tennis",
        precio: 55, 
        stock: 1, 
        img: "../public/img/carrito.png"
    },
];

const displayProductos = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000)
}) ;


export default displayProductos