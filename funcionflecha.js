//let eleccionJugador = parseInt(prompt("1: piedra, 2:papel , 3:tijera"))
let eleccionJugador = ["piedra", "papel", "tijera"]
let eleccionDelJugador = eleccionJugador[0]
console.log(eleccionDelJugador)

//function piedra() {
//
//    var eleccionJugador = 1
//}
//piedra(eleccionJugador)
//
//
//function papel() {
//    var eleccionJugador = 2
//}
////papel()
//
//function tijera() {
//    var eleccionJugador = 3
//}
////tijera()



let eleccionMaquina = Math.floor(Math.random() * (3 - 1)) + 1;

if (eleccionMaquina === eleccionJugador) {
    alert("OH! EMPATE, Quieres volver a intentar?")
} else {
    if (eleccionMaquina === 1 && eleccionJugador === 2) {
        alert("Piedra")
        document.write("en hora buena !GANASTE!")
    }
    if (eleccionMaquina === 1 && eleccionJugador === 3) {
        alert("Piedra")
        document.write("OH NO! te han derrotaron")
    }
    if (eleccionMaquina === 2 && eleccionJugador === 1) {
        alert("Papel")
        document.write("OH NO! te han derrotaron")
    }
    if (eleccionMaquina === 2 && eleccionJugador === 3) {
        alert("Papel")
        document.write("en hora buena !GANASTE!")
    }
    if (eleccionMaquina === 3 && eleccionJugador === 1) {
        alert("tijera")
        document.write("en hora buena !GANASTE!")
    }
    if (eleccionMaquina === 3 && eleccionJugador === 2) {
        alert("tijera")
        document.write("OH NO! te han derrotaron")
    }





}
//alert(eleccionMaquina)