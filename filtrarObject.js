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

    costo: 7000
}];



//  #1
var comprasFiltradasFilter = compras.filter((compra) => compra.costo === 2000);
console.log(comprasFiltradasFilter)
    // #2
var comprasFiltradasMap = compras.map((compra) => compra.nombre);
console.log(comprasFiltradasMap)
    // #3

var comprasFiltradasFind = compras.find((compra) => {
    if (compra.costo === 2000) {
        compras.pop(compra)
    }
})

console.log(comprasFiltradasFind)
console.log(compras)

var comprasFiltradasSome = compras.some((compra) => compra.costo === 2000)
console.log(comprasFiltradasSome)

console.log(Object.values(compras))