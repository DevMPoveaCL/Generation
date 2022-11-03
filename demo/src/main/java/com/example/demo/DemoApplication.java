package com.example.demo;

/* import org.springframework.boot.SpringApplication; */
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.models.Computador;
//import com.example.demo.models.Perro;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		/* SpringApplication.run(DemoApplication.class, args); */
		/*
		 * Perro perroDefault = new Perro();// estoy creando un perro con el contructor
		 * por defecto
		 * Perro perroCompleto = new Perro("Max", "rulos", "Salchicha", true);
		 * Perro perroQuiltro = new Perro("Pelusa", "Liso");
		 */
		Computador computador = new Computador(); // Creación objeto vacío
		Computador computadorCompleto = new Computador("Micro-Atx", "Disco Duro", "Refrigeración por aire", "DDR3",
				"Modular"); // Creación objeto completo
		Computador computadorMix = new Computador("Disco Duro", "Refrigeración por aire", "Modular"); // Objeto "Mix"

		/*
		 * perroDefault.setNombre("copi-copi");
		 * perroDefault.setPelaje("pelo duro");
		 * perroDefault.setRaza("gucci");
		 * perroDefault.setVacunado(true);
		 * perroQuiltro.setVacunado(true);
		 */
		// Set para objeto vacío(computador)
		System.out.println(computador.toString());
		computador.setTamanio("Atx");
		System.out.println(computador.toString());
		computador.setMemoriaRAM("DDR4");
		System.out.println(computador.toString());
		computador.setAlmacenamiento("Disco SSD");
		System.out.println(computador.toString());
		computador.setFuenteDePoder("Modular");
		System.out.println(computador.toString());
		// Set para objeto completo (computador ->Fuente de poder)
		System.out.println("\n" + computadorCompleto.toString());
		computadorCompleto.setFuenteDePoder("Certificada");
		System.out.println(computadorCompleto.toString());
		// Set para objeto Mix (computador ->Almacenamiento)
		System.out.println("\n" + computadorMix.toString());
		computadorMix.setAlmacenamiento("Disco SSD");
		System.out.println(computadorMix.toString());

		/*
		 * String nombrePerro = perroDefault.getNombre();
		 * String nombrePerro2 = perroCompleto.getNombre();
		 */
		// Guardar en variables al menos 3 atributos con el método get
		String computadorVacioRellenado = computador.getFuenteDePoder();
		String computadorMixRellenado = computadorMix.getAlmacenamiento();
		String computadorCompletoModificado = computadorCompleto.getFuenteDePoder();

		// Imprimir las variables mencionadas en línea 57
		System.out.println("\n" + computadorVacioRellenado); // Modular
		System.out.println(computadorMixRellenado); // Disco SSD
		System.out.println(computadorCompletoModificado + "\n"); // Certificada

		// Acciones-Funciones declaradas en archivo "Computador.java"
		computador.iniciarJuego();
		System.out.println(computadorCompleto.programar("java"));
		/*
		 * System.out.println(nombrePerro);
		 * System.out.println(nombrePerro2);
		 * System.out.println(perroQuiltro.toString());
		 * perroQuiltro.setVacunado(false);
		 * System.out.println(perroQuiltro.toString());
		 * 
		 * perroDefault.ladrar();
		 * perroCompleto.caminar();
		 * 
		 * System.out.println(perroQuiltro.truco("hacete el muerto"));
		 * System.out.println(perroCompleto.adopcion());
		 * System.out.println(perroQuiltro.adopcion());
		 */

	}

}
