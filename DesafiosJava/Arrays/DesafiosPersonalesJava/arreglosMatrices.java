/* Escriba una función tal que, dados dos arreglos de números enteros ya ordenados de menor a mayor, genere
un nuevo arreglo correspondiente a la lista ordenada de la mezcla de ambos. Por ejemplo, si se reciben los
arreglos [1, 3, 6, 9, 17] y [2, 4, 10, 17], entonces la función debe devolver [1, 2, 3, 4, 6, 9, 10, 17, 17].  */
//version 1.0 - Fecha: 27-10-2022


import java.util.ArrayList;
import java.util.Arrays;
//Librería para llamar al método sort de Java
import java.util.Collections; 


public class arreglosMatrices {
  
  public static void main (String[] args){

    System.out.println("*****Bienvenido/a*****");
    //Creación de los 2 arreglos que se mostrarán en pantalla
    int [] array1 = new int[5];
    array1[0]= 1;
    array1[1]= 3;
    array1[2]= 6;
    array1[3]= 9;
    array1[4]= 17;

    int [] array2 = new int[4];
    array2[0]= 2;
    array2[1]= 4;
    array2[2]= 10;
    array2[3]= 17;
  
  // Creación del arrayList   
  ArrayList <Integer> miArrayList = new ArrayList <Integer>(Arrays.asList());
  //Añadir los datos del array1 a nuestro arraList
  for(int i: array1){
    miArrayList.add(i);
}
//Añadir los datos del array2 a nuestro arraList
for(int i: array2){
  miArrayList.add(i);
}
  //Ordenar de menor a mayor e imprimir el arrayList
  Collections.sort(miArrayList);
  System.out.println("\nEl arrayList final ordenado de menor a mayor es: "+ miArrayList);

  }
}
