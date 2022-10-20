/*crear una funcion donde ingrese el nombre y fecha de nacimiento
la funcion debe saludar y decir la edad y los años*/

function saludar(nombre, nacimiento) {
    var edad = 2022 - nacimiento;
    console.log("Hola " + nombre + " tu edad es de: " + edad + " años");
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

saludar("Pablo", 1999);