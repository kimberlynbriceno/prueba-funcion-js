const carro = []
let preguntaCliente = prompt("que deseas comprar?")
carro.push(preguntaCliente)

while (confirm("deseas agregar otro producto?")) {
    let newProducto = prompt("cual es tu nuevo producto?")
    carro.push(newProducto)
}
console.log("Usted compro :")

carro.forEach(producto => console.log(producto))


const boton = document.querySelector("#botonId")

boton.addEventListener("click", () =>{
    const h1  = document.querySelector(".title-h1")
    h1.textContent = "Esta tu compra"
    h1.style.color = "orange"
    
})
