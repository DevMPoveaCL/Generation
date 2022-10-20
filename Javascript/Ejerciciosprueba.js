//Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.

/* Al anteponer los tres puntos que representan al spread operator transformamos la variable numeros (que en el ejemplo representa un array con números) en una lista de argumentos, y es por ello que podemos acceder al número mayor del array numeros. Es como si le quitáramos los corchetes ( “[]” ) al array.El Math.max funciona con lista de argumentos no funciona con arrays*/
var numeritos = [4, 16, 25, 2, 455, 8];
let numeritoMayor = Math.max(...numeritos);

console.log(numeritoMayor);


// Función para retornar el número mayor. 
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
//Array que almacena nuestros números a comparar. 
numeroMayor([3,5,7,1,6]);

// Guarda el número mayor obtenido a raíz de nuestro array.
console.log("El número mayor es: ", numeroMayor([3,5,7,1,6]));

//-----------------------------------------------------------------------------------------
//Write a program to sort a list of numbers in descending order (from highest to lowest).

var numeros = [3, 23, -12, 43, 0,-254];
//console.log(numeros.sort(function(a, b){return b - a})); */

function descendente(lista) {
  let  resultado = lista.sort((a,b)=>b-a);
  return resultado;
}
console.log(descendente(numeros));


var lista1 = [-3,4,-2,-5,688];
var lista2 = [1,6,22,-25,88];
function numMayor(lista1, lista2) {
  let listas = lista1.concat(lista2);
  let mayor = listas[0];
  for(var i = 0; i<listas.length ; i++) {
      if(mayor<listas[i]){
          mayor = listas [i];
      }
  }
  return mayor;
}

console.log(numMayor(lista1, lista2)); 



var arr = ["This", "is", "a", "sentence."];
function printOutString() {
let str = arr.toString().replace(/,/g," "); // usar reemplazo "/g" para modificar de forma global todas las coincidencias de la cadena. Usar "/i" ára sustituir sin distinción de mayus y minus. Usar "/m" para múltiples lineas. Si no uso ningún indicador solo reemplazará la primera coincidencia. Tip: Recuerda que puedes combinar los remplazos como por ejemplo "/gi"-> reemplazaremos todas independiente de la mayus o minus. 
return str;
}
console.log(printOutString(arr));

var arr2 = ["This", "is", "a", "sentence."];
function printOutString2() {
    let arr2ToString = arr2.join(" ")
    console.log(arr2ToString);
}
printOutString2();



let antArray = [1, 2, 4, 5];
let multiplicar = 2;
let nuevoArray = antArray.map(i => i * multiplicar); //La función map itera elementos de un arreglo, con ello lo recorremos elemento por elemento. Con la función "Arrow" le decimos que haga lo siguiente.
console.log(nuevoArray);



var array3 = [1,2,3,4];
var sumaArray = array3.reduce((antes, despues) => antes + despues);
var multiArray = array3.reduce((antes, despues) => antes * despues);
console.log(sumaArray, multiArray);


function gradeLabel(grade) {
  if (grade <=6) {
      console.log("Failed");
  } else if (grade > 6 && grade <= 9) {
      console.log("Insufficient");
  } else if (grade > 9 && grade <= 14) {
      console.log("Good");
  } else if (grade == 15) {
      console.log("Excellent");
  } else if (grade < 0 || grade > 15) {
      console.log("Error, outside of bounds");
  }
}
gradeLabel(15);


var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,false];
var values3 = ['Mars', 9, 'Apple',2];
var indices =  values2.concat(values3);
var values =  values1.concat(values3[3]);

var similares = (values, indices) => values.filter (x =>indices.includes(x));
console.log (similares(values,indices ))


/* var iguales=[];
for(var i=0;i<values1.length;i++)
{
	for(var j=0;j<values1.length;j++)
	{
		if(values1[i]==values2[j])
			iguales[i] = values1[i];
	}
}
console.log(iguales[i]); */


