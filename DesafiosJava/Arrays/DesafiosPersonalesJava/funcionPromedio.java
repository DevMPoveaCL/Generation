/* Escriba una función que, dados dos números enteros recibidos como parámetros, devuelva el promedio entre ellos. */
//version 1.0 - Fecha: 27-10-2022

import java.io.Console;

public class funcionPromedio {
  // función que promedia solo 2 números enteros
  static float Promedio (int num1, int num2) {
    float resultado = (float) (num1 + num2)/2; // Declaración de float antes de la operación a fin de señalarle a Java que nos brinde la operación con sus decimales correspondientes a float. 
    return resultado;
}

  public static void main (String[] args){
    //Función console para leer datos y mensaje de Bienvenida.
    Console console = System.console();
    System.out.println("Bienvenido/a");

    //Ingreso de 2 número enteros y devolución del promedio entre ellos (resultado devuelve el promedio de los dos enteros y los transforma en float de 1 decimal)
    int numero1 = Integer.parseInt(console.readLine("Ingresa el primer numero: "));
    int numero2 = Integer.parseInt(console.readLine("Ingresa el segundo numero: "));
    System.out.printf("El promedio de los dos números es %.1f",Promedio(numero1,numero2));
    

  }
}
