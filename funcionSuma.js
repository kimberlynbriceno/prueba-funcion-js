let nombre = prompt('cual es tu nombre?');
let debes = parseInt(prompt("cuanto debes"));
let costo = 5
    //OPCION 1
var pagoid = document.getElementById("ventaid");

let sumaInt = (a, b) => a + b;

pagoid.innerHTML = (`hola ${nombre} tu deuda es de ${sumaInt(debes, costo)}`)

//OPCION2
function pago(deuda, precio) {

    result = deuda + precio;
    console.log(`hola ${nombre} tu deuda es de ${result}`);
}

pago(debes, costo);