package com.example.demo.models;

// aquí la rompimos
public class Computador {
    private String tamanio; // mini, micro,atx.
    private String almacenamiento;// disco duro, sólido.
    private String refrigeracion; // ventiladore (por aire), refrigeración líquida.
    private String memoriaRAM; // ddr2,ddr3,drr4,ddr5 etc.
    private String fuenteDePoder;// Certificadas,modulares.

    public Computador() {
    }

    public Computador(String tamanio, String almacenamiento, String refrigeracion, String memoriaRAM,
            String fuenteDePoder) {
        this.tamanio = tamanio;
        this.almacenamiento = almacenamiento;
        this.refrigeracion = refrigeracion;
        this.memoriaRAM = memoriaRAM;
        this.fuenteDePoder = fuenteDePoder;
    }

    public Computador(String almacenamiento, String refrigeracion,
            String fuenteDePoder) {
        this.tamanio = "micro-atx";
        this.almacenamiento = almacenamiento;
        this.refrigeracion = refrigeracion;
        this.memoriaRAM = "DDR5";
        this.fuenteDePoder = fuenteDePoder;
    }

    public String getTamanio() {
        return tamanio;
    }

    public void setTamanio(String tamanio) {
        this.tamanio = tamanio;
    }

    public String getAlmacenamiento() {
        return almacenamiento;
    }

    public void setAlmacenamiento(String almacenamiento) {
        this.almacenamiento = almacenamiento;
    }

    public String getRefrigeracion() {
        return refrigeracion;
    }

    public void setRefrigeracion(String refrigeracion) {
        this.refrigeracion = refrigeracion;
    }

    public String getMemoriaRAM() {
        return memoriaRAM;
    }

    public void setMemoriaRAM(String memoriaRAM) {
        this.memoriaRAM = memoriaRAM;
    }

    public String getFuenteDePoder() {
        return fuenteDePoder;
    }

    public void setFuenteDePoder(String fuenteDePoder) {
        this.fuenteDePoder = fuenteDePoder;
    }

    public void iniciarJuego() {
        System.out.println("iniciando Solitario T.T");
    }

    // Acción programar en relación a un lenguaje.
    public String programar(String lenguaje) {
        if (lenguaje == "java") {
            return "Ahí sí po... Este si es java";
        }
        return "Póngase víoh, solo setié el lenguaje java...";

    }

    @Override
    public String toString() {
        return "Computador [tamanio=" + tamanio + ", almacenamiento=" + almacenamiento + ", refrigeracion="
                + refrigeracion + ", memoriaRAM=" + memoriaRAM + ", fuenteDePoder=" + fuenteDePoder + "]";
    }

}