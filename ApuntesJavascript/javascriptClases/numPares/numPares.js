//Obtén del 1 al 255: Escribe un programa que devuelve un array con todos los números del 1 al 255.

/* function  numbers (array) {
    let x = array;
    do {
        console.log (x)
        if (x ==255){
            break;
        }
        x++;
    }while (x>=1);
}
numbers (1); */

/* function esPar(numero) 
{ 
  return (numero % 2) == 0; 
}  */

/* Consigue pares hasta 1000: Escribe un programa que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. */

/* var numPares = Array.from({ length: 1000 }).map((v, k) => k + 1).filter(v => v % 2 === 0); 
 
console.log(numPares); */

//console.log(new Array(1000).fill(0).map((_, i) => i * 2 + 2 ))

//Suma impares hasta 5000: Escribe un programa que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
/* 
var impares = Array.from({ length: 5000 }).map((v, k) => k + 1).filter(v => v % 2 === 1); 
     
console.log(impares); 

var sumaImpares = impares.reduce((antes, despues) => antes + despues);
console.log("La suma de los impares del 1 al 5000 equivale a: " + sumaImpares); */

var arr = [5, 9, 2, 7, 3, 4, 6];

//ascending-order y numero par
for (i = 0; i < 10; i++) {
  if (arr.includes(i) && i % 2 == 0) {
    console.log(i);
  }
}
/* 
//descending-order
for(let i = 10; i > 0; i--) {
    if(arr.includes(i)) {console.log(i)};
  }
 */
