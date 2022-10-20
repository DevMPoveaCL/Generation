//Programa que sirve a Don José administrar su negocio de minimarket a través de un software que cumpla con las siguientes funciones.
//Fecha creación: 20-10-2022 (version 1.0)
//---------------------------------------------------------------------------------------------
/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento. */

//Código imperfecto, falta pulir.
/* //Declaracion de variables
var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var precios = [100,300,500,800];
var nuevosPrecios =[];
//función para recorrer variable días y asignar descuentos
for(var i=0;i<values1.length;i++) {
	for(var j=0;j<values1.length;j++) {
    if ( dias(i) == dias("Martes","Jueves") ){
      precios.forEach(i=>nuevosPrecios.push(i*0.80));  //descuentos del 20%
      return (nuevosPrecios);
	    }
  }
}
console.log (nuevosPrecios);
console.log (precios);
 */


/* Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento. */

//Pensar como hacerlo dentro de una función sin utilizar reduce().


/* Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba. */

//Idea de código sin completar, todavía no he recorrido el arreglo.
/* var precioProd = [200,100,-500,300]
function num (x){
  if (num(x)<0){
    return m = ("Error número negativo");
  }else{
    return m2 = ("Número positivo");
  }
}
 console.log (m)
 console.log (m2) */





/* Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso. */

var precioProductos = [200,5500,900,7000,500,300]

//Funcion que devuelve el producto más costoso
function numeroMayor(array) {
	//Variable del número máximo.
  	let max = array[0]
	//Ciclo para recorrer el array
   	 for (i = 0; i<array.length; i++){
		// Condicional que compara nuestro número máximo actual vs el número actual del array.
    		if(max<array[i]) {
		//Variable que reemplaza el número mayor actual por el número actual del array.
     		 max = array [i]
   		 }   
 	 }
	//Nos retorna el último número mayor obtenido a raíz del ciclo.
	return max;
}

//Funcion que devuelve el producto más costoso
function numeroMenor(array) {
	//Variable del número mínimo.
  	let min = array[0]
	//Ciclo para recorrer el array
   	 for (i = 0; i<array.length; i++){
		// Condicional que compara nuestro número máximo actual vs el número actual del array.
    		if(min>array[i]) {
		//Variable que reemplaza el número mayor actual por el número actual del array.
     		  min = array [i]
   		 }   
 	 }
	//Nos retorna el último número mayor obtenido a raíz del ciclo.
	return min;
}

//Impresión número máximo y número menor 
console.log (numeroMayor(precioProductos));
console.log (numeroMenor(precioProductos));
