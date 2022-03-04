let eleccionJugador = 0


function piedra(i) {
    var eleccionJugador = 1
}


function papel(i) {
    var eleccionJugador = 2
}
//papel(eleccionJugador)

function tijera(i) {
    var eleccionJugador = 3
}




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