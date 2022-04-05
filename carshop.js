const carro = document.querySelector("#carritoId")
const template = document.querySelector("#templateId")
const fragment = document.createDocumentFragment()
const comprar = document.querySelectorAll(".card .btn")

const objCompra = []


const agregarCarrito = (e) => {
    const articulo = {
        titulo: e.target.dataset.producto,
        id: e.target.dataset.producto,
        cantidad: 1
    }

    const indice = objCompra.findIndex((iten) => iten.id === articulo.id)
    console.log(indice)

    if (indice === -1) {
        objCompra.push(articulo)
    } else {
        objCompra[indice].cantidad++
    }

    pintarCarrito(objCompra)

}
comprar.forEach((boton) => boton.addEventListener("click", agregarCarrito))


const pintarCarrito = (objCompra) => {
    carro.textContent = ""

    objCompra.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".h5").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad

        fragment.appendChild(clone)
    })
    carro.appendChild(fragment)


};

// const botonesMasMenos = document.querySelector("#btnMasMenos")
// botonesMasMenos.addEventListener("click", (e) => {
// if (e.target.id === "btn+-") {
// console.log(e.target.id)
// };
// })










// #ESTA ES LA OPCION CON OBJETOS
//  if (objCompra.hasOwnProperty(articulo.titulo)) {
//      articulo.cantidad = objCompra[articulo.titulo].cantidad + 1;
//  }
//
//  objCompra[articulo.titulo] = articulo
//
//  pintarCarrito()
//


// #EST ES LA OPCION CON OBJECT
// const pintarCarrito = (articulo) => {
// carro.textContent = ""
// 
// Object.values(objCompra).forEach((item) => {
// const clone = template.content.cloneNode(true);
// clone.querySelector(".lead").textContent = item.titulo
// clone.querySelector(".badge").textContent = item.cantidad
// 
// fragment.appendChild(clone)
// })
// carro.appendChild(fragment)
// }






















//const carro = []
//let preguntaCliente = prompt("que deseas comprar?")
//carro.push(preguntaCliente)
//
//while (confirm("deseas agregar otro producto?")) {
//    let newProducto = prompt("cual es tu nuevo producto?")
//    carro.push(newProducto)
//}
//console.log("Usted compro :")
//
//carro.forEach(producto => console.log(producto))
//
//
//const boton = document.querySelector("#botonId")
//
//boton.addEventListener("click", () =>{
//    const h1  = document.querySelector(".title-h1")
//    h1.textContent = "Esta tu compra"
//    h1.style.color = "orange"})