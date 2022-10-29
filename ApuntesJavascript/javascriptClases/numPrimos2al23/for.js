//Programa que sirve para identificar los números primos y no primos al 23. (Número primo = número entero y positivo del conjunto de los naturales a partir del número "2")
//Fecha creación: 18-10-2022 (version 1.0)

//Creación de función que identifique al número como primo o no primo.
function esPrimo(x) {
  /* if (x<=1){ //----> Condición para eliminar los números menores e iguales a 1, ya que no participan dentro de nuestro programa... se optó por eliminar y comentar dicho condicional. 
    return false;
  }else{ */
  for (var i = 2; i <= x - 1; i++) {
    // ---> Fórmula que calcula un número primo.
    if (x % i == 0) {
      return false;
    }
  }
  return true;
  //  }
}
//recorrido de números del 2 al 23. Llamamos a la función "esPrimo" a fin de que identifique el resultado.
for (var i = 2; i <= 23; i++) {
  if (esPrimo(i)) {
    console.log(i + "-> Es primo");
  } else {
    console.log(i + "-> No es primo");
  }
}
