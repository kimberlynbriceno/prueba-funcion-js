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
}]

for (const propiedad in compras) {
    console.log(compras[propiedad]);

    //  #1
    var comprasFiltradasFilter = compras.filter(function(compra) {
        return compra.costo === 2000
    });
    // #2
    var comprasFiltradasMap = compras.map(function(compra) {
        return compra.nombre
    });
    //#3
    var comprasFiltradasFind = compras.find(function(compra) {
        return compra.costo === 2000
    });