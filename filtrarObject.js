let compras = [{
    nombre: "pollo",
    costo: 9200
}, {
    nombre: "mayonesa",
    costo: 2000
}, {
    nombre: "cholas",
    costo: 10000
}, {
    nombre: "polvo",
    costo: 4000
}, {
    nombre: "llavero",
    costo: 2000
}, {
    nombre: "silla",
    costo: 7000
}]

const newProducto = [{
    nombre: "polvo",
    costo: 4000
}, {
    nombre: "llavero",
    costo: 2000
}, {
    nombre: "papa",
    costo: 7000
}]


//  #1
var comprasFiltradasFilter = compras.filter((compra) => compra.costo === 2000);
// #2
var comprasFiltradasMap = compras.map((compra) => compra.nombre);
//#3
var comprasFiltradasFind = compras.find((compra) => compra.costo === 2000);

var comprasFiltradasSome = compras.some((compra) => compra.nombre === "mayonesa");

var comprasFiltradasFinIndex = compras.findIndex((compra) => compra.nombre === "llavero");

var comprasFiltradasSlice = compras.slice((1, 3))

var comprasFiltradasConcat = compras.concat(newProducto)






console.log(comprasFiltradasSome)
console.log(comprasFiltradasFinIndex)
console.log(comprasFiltradasConcat)
console.log(comprasFiltradasSlice)