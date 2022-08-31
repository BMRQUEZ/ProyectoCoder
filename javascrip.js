


//Declaracion de productos
class Productos {
  constructor(id,imagen, nombre, descripcion, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
const producto1  = new Productos (0 ,"", "Selectora Rapida",  "Selectora Rapida Falcon Chevy Torino", 46000);
const producto3  = new Productos (3 ,"", "Selectora Rapida", "Selectora rapida para caja lancia Fiat", 30000);
const producto2  = new Productos (2 ,"",  "Selectora Rapida", "Selectora rapida para vw Senda-Gol", 38000);
const producto4  = new Productos (4 ,"", "Selectora Rapida", "Selectora Rapida Caja A230 Dodge Gtx Rt Polara", 47000);
const producto5  = new Productos (5 ,"", "Volante de competicion", "Volante de competicion tapizado gamuza 355 Mm", 12000);
const producto6  = new Productos (6 ,"", "Volante de competicion", "Volante de competicion aluminio perforado 355mm", 9000);
const producto7  = new Productos (7 ,"", "Volante de competicion", "Volante de competicion Base Plana", 26000);
const producto8  = new Productos (8 ,"", "Volante de competicion", "Volante de competicion tapizado Cuero 355mm", 17000);
const producto9  = new Productos (9 ,"", "Butaca de competicion", "Butaca Nick De Competición Modelo Carrera Iv Negra Grande L", 28290);
const producto10 = new Productos (10 ,"", "Butaca de competicion", "Butaca Nick De Competición Modelo Indy Negra Talle Grande", 32200);
const producto11 = new Productos (11 ,"", "Butaca de competicion", "Butaca Competición Mec Sport De Calle Roja Talle Grande", 29000);
const producto12 = new Productos (12 ,"", "Butaca de competicion", "Butaca Competición Mec Sport Cerrada Roja", 34000);

let productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12]
let productosEnCarrito = []
//Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador
let paymentBrick_container = document.getElementById("paymentBrick_container")


//Evento botonCarrito
botonCarrito.addEventListener('click', () => {
cargarProductosCarrito(productosEnCarrito)})

console.log (botonCarrito)



//Creacion de card con productos
let divContenedor = document.getElementById("contenedor")
productos.forEach((producto) => {
let nuevoProducto = document.createElement ("div")
nuevoProducto.innerHTML =
              `<div class="container">
                <div class="row row -cols-4" style="row-gap: 25px ;">
                <div class="col">
                  <div id="${producto.id}" class="card" style="width: 15rem;">
                  <img src="../Img/Selectora rapida 2.png" class="card-img-top" alt="Selectora rapida">
                  <div class="card-body">
                    <hr>
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion} </p>
                    <p class="card-precio"> $${producto.precio}</p>
                    <button href="#" id="agregarBtn${producto.id}" class="btn btn-primary"  >Agregar al carrito</button>
                  </div>
                </div>
              </div>
             </div> `
divContenedor.appendChild (nuevoProducto)


//Evento botton agregar carrito
let btnAgregar =document.getElementById (`agregarBtn${producto.id}`)
btnAgregar.addEventListener('click', () => agregarAlCarrito(producto))})
function agregarAlCarrito(producto){
  console.log(`El producto ${producto.descripcion} ha sido agregado al carrito de compras.`);
  productosEnCarrito.push(producto);
  Swal.fire({
    icon: 'success',
    title: `El Producto ${producto.descripcion} agregado con exito al carrito`,
     
    
    
  })
  console.log(productosEnCarrito);}
localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
function cargarProductosCarrito(productosDelStorage) {
  modalBody.innerHTML = " "  
  productosDelStorage.forEach((productoCarrito) => {
      modalBody.innerHTML += 
      `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
              <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
              <div class="card-body">
                      <h4 class="card-title">${productoCarrito.descripcion}</h4>
                  
                      <p class="card-text">$${productoCarrito.precio}</p> 
                      <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
              </div>    
          
          
          </div>`
  
})

//FUnction del total
//productosEnCarritos
compraTotal(productosDelStorage)
}
function compraTotal(productosTotal) {
    acumulador = 0;
    //recorrer productosTotal
    productosTotal.forEach((productoCarrito)=>{
        acumulador += productoCarrito.precio 
    })
    
    if(acumulador == 0){
        parrafoCompra.innerHTML = `<p> No hay productos en el carrito </p>`
    }else{
        parrafoCompra.innerHTML = `Suma total de sus productos ${acumulador}`
    }}  


    botonFinalizarCompra.addEventListener('click', () => {paymentBrick_container.classList.add('show')})