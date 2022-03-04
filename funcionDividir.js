  let numeroCi = prompt("cual tu edad?");
  let divisor = 3

  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  function division(a, b) {
      resul = a / b;
      return resul
  }
  let resultado = division(numeroCi, divisor);
  console.log(letras[resultado]);

  let aleatori = Math.floor(Math.random() * (3 - 0)) + 0;
  console.log(aleatori)