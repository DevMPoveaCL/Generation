
// Qué es un bucle? -> algo que se repite.
/*
    bucles:
    for -> for - forEach
    while -> while - do While
    for(var i = 0; i < 10; i++){
        proceso
    }
    var matriz = [1,5,8,7,4,6];
    matriz.forEach(x => proceso)
*/
/* var matriz = [1,5,8,7,4,6];
    //matriz.forEach(numero=>console.log(numero+2));
//console.log('--------------------------')
for(var i = 0; i < matriz.length; i++){
        //console.log(matriz[i]+2);
    }*/
/* var matrizPrecios = [1000,500,800,7000,400,600];
var nuevosPrecios =[];
matrizPrecios.forEach(x=>nuevosPrecios.push(x*0.85)); 
console.log(nuevosPrecios); */

/*Ciclos While
    while(condicion){
    }
    
    do{
    }while(condicion);
*/



/*while(x<=3){
    console.log('si');
    x--;
    console.log(x);
}*/
/* 
  function esPrimo (x){
    var i=1;
do {
    if (x<=1){
      return false;
    }else{
      for (var i = 2; i <= x-1; i++){
        if (x % i == 0){
          return false;
        }
      }
      return false;
    }
  }while (i<23, i++)
}
 */
function esPrimo (x){
  if (x<=1){
    return false;
  }else{
    for (var i = 2; i <= x-1; i++){
      if (x % i == 0){
        return false;
      }
    }
    return true;
  }
}

/* function esPrimo(x){
  if(x<=1){
      return false;
  }else{
      for(var i = 2; i <= x-1; i++){
          if(x % i == 0){
              return false;
          }
      }
      return true;
  }
} */
var cont = 1;
do{
  if(esPrimo(cont)){
      console.log(cont + ', Es primo');
  }else{
      console.log(cont + ', No es primo');
  }
  cont ++;
}while (cont<24)

/* var cont = 1;
while (true){
  if (esPrimo(cont)){
    console.log (cont + ', es primo');
  }else{
    console.log (cont + ',No es primo');
   
  } if (cont ==23){
    break;
  }
  cont ++; 
} */



//Refactorizar-> optimizar el código
/*
    Caracteristicas
    1.- Fácil de mantener(escalable)-> puede crecer y mejorar sin problemas con el tiempo
    2.- Buena legibilidad 
    3.- Mejora la eficacia
*/

//PruebaJavaScriptC3

//PruebaJavaScriptC3-Nombre apellido

