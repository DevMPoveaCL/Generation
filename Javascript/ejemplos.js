/*var oracion = 'esta es una oracion';
var oracion2 = 'eSTa Es uNa oRacion';
var num = 'letras';

console.log(oracion.toUpperCase());
console.log(oracion.toLowerCase());
console.log(oracion.charAt(3)); // extrae posicion de la letra a raíz de la oracion
console.log(oracion2.concat(oracion));
console.log (typeof(num));

var numInt = parseInt(num); //parseint: Transforma la cadena string a number
console.log (typeof(numInt));
console.log (numInt);*/

var oracion3 = 'esta es otra oracion';
var primeraLetra = oracion3.charAt(0);
var restoOracion = oracion3.slice(1,);
console.log (primeraLetra.toUpperCase().concat(restoOracion));