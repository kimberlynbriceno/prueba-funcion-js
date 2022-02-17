let nombre = prompt('cual es tu nombre?');
let debes = parseInt(prompt("cuanto debes"));
let costo = 5
    //OPCION 1

function pago(deuda, precio) {

    result = deuda + precio;
    return result
}

let resul = pago(debes, costo);
console.log(`hola ${nombre} tu deuda es de ${resul}`)
    //OPCION2
function pago(deuda, precio) {

    result = deuda + precio;
    console.log(`hola ${nombre} tu deuda es de ${result}`);
}

pago(debes, costo);