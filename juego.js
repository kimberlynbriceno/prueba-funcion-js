let eleccionMaquina = Math.floor(Math.random() * (3 - 1)) + 1;

var eleccionJugador = 0

function jugar() {
    if (eleccionMaquina === eleccionJugador) {
        const empate = document.querySelector(".display-1")
        empate.textContent = "OH! EMPATE, Quieres volver a intentar?"

        // alert("OH! EMPATE, Quieres volver a intentar?")
    } else {
        if (eleccionMaquina === 1 && eleccionJugador === 2) {
            alert("Piedra")
            const empate = document.querySelector(".display-1")
            empate.textContent = "en hora buena !GANASTE!"
        }
        if (eleccionMaquina === 1 && eleccionJugador === 3) {
            alert("Piedra")
            const empate = document.querySelector(".display-1")
            empate.textContent = "OH NO! te han derrotaron"
        }
        if (eleccionMaquina === 2 && eleccionJugador === 1) {
            alert("Papel")
            const empate = document.querySelector(".display-1")
            empate.textContent = "OH NO! te han derrotaron"
        }
        if (eleccionMaquina === 2 && eleccionJugador === 3) {
            alert("Papel")
            const empate = document.querySelector(".display-1")
            empate.textContent = "en hora buena !GANASTE!"
        }
        if (eleccionMaquina === 3 && eleccionJugador === 1) {
            alert("tijera")
            const empate = document.querySelector(".display-1")
            empate.textContent = "en hora buena !GANASTE!"
        }
        if (eleccionMaquina === 3 && eleccionJugador === 2) {
            alert("tijera")
            const empate = document.querySelector(".display-1")
            empate.textContent = "OH NO! te han derrotaron"
        }

    }
}

function piedra() {

    eleccionJugador = 1
}



function papel() {
    eleccionJugador = 2
}


function tijera() {
    eleccionJugador = 3
}

jugar()