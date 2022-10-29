function numero_ej2(numero_x) {
  if (numero_x % 4 == 0 || numero_x % 9 == 0) {
    return "verdadero";
  } else {
    return "falso";
  }
}

console.log(numero_ej2(25));
