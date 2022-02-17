 //ejercicio #3
 var dinero1 = parseInt(prompt('cuanto dinero tienes'));


 if (dinero1 >= 3 && dinero1 <= 4.5) {
     alert("te alcanza solo para la pizza mini");

 }
 if (dinero1 >= 4.5 && dinero1 <= 6) {
     alert("te alcaza para la pizza mediana");
 }
 if (dinero1 >= 6.9 && dinero1 <= 9) {
     alert("bravo, puedes comprar una pizza familiar");
 }

 if (dinero1 >= 10) {
     alert("aforunado, puedes comprar mas de una pizza");
 } else if (dinero1 < 2) {
     alert("eres un pobre limpio, no tienes dinero para comprar nada");
 }