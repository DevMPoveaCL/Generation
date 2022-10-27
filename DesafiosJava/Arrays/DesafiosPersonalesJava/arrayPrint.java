/* Escriba un programa que permita imprimir en pantalla cada uno de los elementos del siguiente
arreglo: [0, 28, 30, 10, 4]. */
//version 1.0 - Fecha: 27-10-2022


public class arrayPrint {
  
  public static void main (String[] args){
    System.out.println("*****Bienvenido/a*****");
    //Creación del arreglo que se mostrará en pantalla
    int [] arrayPrint = new int[5];
    arrayPrint[0]= 0;
    arrayPrint[1]= 28;
    arrayPrint[2]= 30;
    arrayPrint[3]= 10;
    arrayPrint[4]= 4;
    
    //Bucle que recorre el arreglo y muestra cada elemento en pantalla
    for(int i: arrayPrint){
      System.out.println(i);
  }

}
}