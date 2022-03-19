let eleccionMaquina = Math.floor(Math.random() * (3 - 1)) + 1;

var eleccionJugador = 0

function jugar() {
    if (eleccionMaquina === eleccionJugador) {
        alert("OH! EMPATE, Quieres volver a intentar?")
    } else {
        if (eleccionMaquina === 1 && eleccionJugador === 2) {
            alert("Piedra")
            
            const title  = document.querySelector("titulo")
            title.textContent = "en hora buena !GANASTE!"
            title.style.color = "orange"
            // document.getElementById("titulo").innerHTML = "en hora buena !GANASTE!"
        }
        if (eleccionMaquina === 1 && eleccionJugador === 3) {
            alert("Piedra")
            document.getElementById("titulo").innerHTML = "OH NO! te han derrotaron"
        }
        if (eleccionMaquina === 2 && eleccionJugador === 1) {
            alert("Papel")
            document.getElementById("titulo").innerHTML = "OH NO! te han derrotaron"
        }
        if (eleccionMaquina === 2 && eleccionJugador === 3) {
            alert("Papel")
            document.getElementById("titulo").innerHTML = "en hora buena !GANASTE!"
        }
        if (eleccionMaquina === 3 && eleccionJugador === 1) {
            alert("tijera")
            document.getElementById("titulo").innerHTML = "en hora buena !GANASTE!"
        }
        if (eleccionMaquina === 3 && eleccionJugador === 2) {
            alert("tijera")
            document.getElementById("titulo").innerHTML = "OH NO! te han derrotaron"
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

