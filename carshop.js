const carro = document.querySelector("#carritoId")
const template = document.querySelector("#templateId")
const footer = document.querySelector("#footer")
const templateFooter = document.querySelector("#templateFooter")
const fragment = document.createDocumentFragment()
    // const comprar = document.querySelectorAll(".card .btn")

document.addEventListener("click", (e) => {
    if (e.target.matches(".card .btn-danger")) {
        agregarCarrito(e)
    }
    if (e.target.matches(".btn-primary")) {
        btnMas(e)
    };
    if (e.target.matches(".btn-success")) {
        btnMenos(e)
    }
})



let objCompra = []


const agregarCarrito = (e) => {
        const articulo = {
            titulo: e.target.dataset.producto,
            id: e.target.dataset.producto,
            cantidad: 1,
            precio: parseInt(e.target.dataset.precio)
        }

        const indice = objCompra.findIndex((iten) => iten.id === articulo.id)
        console.log(indice)

        if (indice === -1) {
            objCompra.push(articulo)
        } else {
            objCompra[indice].cantidad++
                // objCompra[indice].precio = objCompra[indice].cantidad * articulo.precio
        }

        pintarCarrito()

    }
    // comprar.forEach((boton) => boton.addEventListener("click", agregarCarrito))


const pintarCarrito = () => {
    carro.textContent = ""

    objCompra.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".h5").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad
        clone.querySelector("#spanTotal").textContent = item.precio * item.cantidad

        clone.querySelector(".btn-primary").dataset.id = item.id
        clone.querySelector(".btn-success").dataset.id = item.id

        // const cloneDos = templateFooter.content.cloneNode(true)
        // clone.querySelector("#totalCompra").textContent =
        fragment.appendChild(clone)
    })
    carro.appendChild(fragment)


};

const btnMas = (e) => {
    objCompra = objCompra.map(item => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++

        }
        return item
    })

    pintarCarrito()

}

const btnMenos = (e) => {
    objCompra = objCompra.filter(item => {
        if (item.cantidad > 0) {
            item.cantidad--

        }
        return item
    })
    pintarCarrito()
}










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