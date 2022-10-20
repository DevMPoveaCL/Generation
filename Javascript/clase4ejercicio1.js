/*
( true && true )  true
( false && true )   false
( true && false )   false
( false && false )  false
( true || true)     true
( true || false )   true
( false || true)    true
( false || false )  false
!( false || true )  true
!( false && true )  false
( !false && true )  true
( !true && true )   false
( !false || false ) true
*/


/**
 * Exercise #1
 * Create a function that takes in one number
 * and checks if the number is greater than  10. Print out to the console true if it is greater and false otherwise.
 */

//Crear la función que tome un número

//Condicional que verifique que el número sea mayor a 10

//imprimir por consola verdadero si es mayor y falso si es menor

/**
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9. 
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */


/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" 
 

 function checkEmptyString(str) {
  if (str === ""){
      console.log("this string is empty")
  }
  else {
      console.log(str.charAt(0))
  }
}



checkEmptyString("")

/* We want to compare two strings and check if
* they are the same - case insensitive.
* Return a boolean - true if the two strings are
* the same, and false if they are not 
*/ 
/*   var oracion1 = "Hola";
  var oracion2 = "hola";
oracion1 = oracion1.toLowerCase();
oracion2 = oracion2.toLowerCase();

  if(oracion1 == oracion2) {
      console.log("true")
  } else { 
    console.log("false")
  }
 */
/*
creación de matrices
var matriz = [1,2,4,5];
var matriz2 = [];
acceder a un elemento de la matriz, ej: ingresar al "2" de la variable matriz
var elemento = matriz[1]; //elemento -> "2"
var elemento = matriz[2]; //elemento -> "4"

Cómo editar una matriz
matriz[2] = 3; -----> la matriz quedaría [1,2,3,5];

imprimir los elementos de la matriz se hace con ciclos for o foreach

*/
/* var matriz= [1,5,2,3,6,7]; //Si se repite un elemento muestra la posición del primero que encuentra de de izq a der.
console.log (matriz.indexOf(2));
console.log (matriz.indexOf(8));
//pop ---> elimina el ULTIMO elemento de la matriz.
console.log (matriz.pop());
//push agrega uno o más elementos al final de la matriz o array
matriz.push (8,6,9);
//splice -> primer parámetro te sitúa en el elemento indice que queremos empezar a modificar, el segundo parámetro indica cuantos elementos de la matriz eliminaremos a partir del índice donde situamos el primer parámetro y el tercer parámetro indica cuales elementos añadiremos */
/* var matriz3 = [1,2,3]; 
matriz3.splice (1,0,'Orale','Crack');
console.log(matriz3);

var matriz4 = [1,2,3,4]; 
matriz4.splice (2); //Elimina todo hacia la derecha incluyendo el indice
console.log(matriz4); */

//compara 2 string y si son iguales V o F
/* function comparastr(str1,str2){
str1= str1.toLowerCase();
str2= str2.toLowerCase();
//console.log (str1,str2);
if (str1 == str2) {
  console.log ("Verdadero");
}else{
  console.log ("Falso");
} 
}
comparastr ("Hola","hola") */

/* const matriz =[1,4,5,6];
const matriz2 = [2,3,6,7];
const sliceMatriz= matriz2.slice (1,4); //divide a partir del indice que se señala en el primer parámetro y el segundo es hasta qué parámetro
const sliceMatriz2= matriz2.slice (2);
const sliceMatriz3= matriz2.slice (-2);
const sliceMatriz4= matriz2.slice (-1);
console.log(sliceMatriz, sliceMatriz2,sliceMatriz3,sliceMatriz4); */

/* //UnShift -> Agrega elemento al inicio de la matriz
const matriz4 = [1,5,2,3,6,8,8]
matriz4.unshift('palabra',8);
console.log(matriz4)

//Shift -> Elimina el PRIMER objeto en la matriz

const matriz5 = [1,5,2,3,6,8,8]
matriz5.shift();
console.log(matriz5) */

//Slice -> devuelve una parte de la matriz en formato matriz

/* const matriz6 = [1,5,8,4,6,9,8]
const sliceMatriz1 = matriz6.slice(2,5); //-> Entrega una matriz con la parte desde le indice 2 hasta el 5
const sliceMatriz2 = matriz6.slice(2);//-> Entrega una parte desde el indice 2 hasta el final de la matriz
const sliceMatriz3 = matriz6.slice(-3);//-> Entrega los 3 últimos dígitos de la matriz
const sliceMatriz4 = matriz6.slice(2,-2);//-> Entrega una parte de la matriz desde el indice 2 hasta 2 posiciones menos que el final
//console.log(matriz6);
console.log(sliceMatriz4);  */
//--------------------------

//tipos de declaración variables
/* 
    var -> se ocupa cuando uno declara una variable GLOBAL
    let -> se ocupa cuando uno declara una variable LOCAL
    const -> se ocupa cuando uno declara una variable que NO debe cambiar
*/

/* var x = 1;
var y = 2;
function f (){
    let z = 0;
    x = 2;
}
f();
console.log(x);

function g (){
    const b = 5;
    let a = 5;
    console.log(a);
    console.log(b);
    return b;
}
var respuesta = g();
console.log(respuesta);
 */

/* for (var i =0; i <10, i++){ // hacer 10 veces el proceso ya que parte en 0 hasta el 9.
  proceso
} */
 
var matriz = [1,5,8,7,4,6];
/* 
matriz.forEach(num=>console.log(num))
console.log ("",matriz.length);
//matriz.forEach(num=>console.log(num+2)) ---> sumar +2 a cada indice de la matriz
 */

for (var i=0; i<matriz.length; i++){
  console.log (matriz[i]);
 // console.log (matriz[i]+2); -> sumar +2 a cada indice de la matriz
} 





