/* Escriba un programa que deduzca e imprima en pantalla el número menor en el siguiente
arreglo: [90, 1, 38, 0, 29, 4]. */
//version 1.0 - Fecha: 27-10-2022

public class numMenor {
  
  public static void main (String[] args){
    System.out.println("*****Bienvenido/a*****");
    //Creación del arreglo
    int [] array1 = new int[6];
    array1[0]= 90;
    array1[1]= 1;
    array1[2]= 38;
    array1[3]= 10;
    array1[4]= 29;
    array1[5]= 0;
    //Igualar y crear variable menor contra el índice del array1.
    int menor =array1[0];
    //Recorrer el arreglo según su longitud y sobreescribir el menor
    for (int i=0; i<array1.length; i++){
      if(array1[i]<menor) {
        menor = array1[i];
    }
    }
    //Imprimir el menor
    System.out.println("El menor valor es: "+menor);
  }
}
