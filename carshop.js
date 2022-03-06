const carro = []
let preguntaCliente = prompt("que deseas comprar?")
carro.push(preguntaCliente)

while (confirm("deseas agregar otro producto?")) {
    let newProducto = prompt("cual es tu nuevo producto?")
    carro.push(newProducto)
}
console.log("Usted compro :")
for (let compra of carro) {
    console.log(compra)
}