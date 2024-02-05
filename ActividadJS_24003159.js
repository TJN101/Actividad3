// Solicitar al usuario el mes y día de nacimiento
let mesNacimiento = parseInt(prompt("Ingresa el mes de nacimiento (en números):"));
let diaNacimiento = parseInt(prompt("Ingresa el día de nacimiento:"));

// Calcular el signo zodiacal
let signo = "";

if ((mesNacimiento === 3 && diaNacimiento >= 21) || (mesNacimiento === 4 && diaNacimiento <= 19)) {
    signo = "Aries";
} else if ((mesNacimiento === 4 && diaNacimiento >= 20) || (mesNacimiento === 5 && diaNacimiento <= 20)) {
    signo = "Tauro";
} else if ((mesNacimiento === 5 && diaNacimiento >= 21) || (mesNacimiento === 6 && diaNacimiento <= 20)) {
    signo = "Géminis";
} else if ((mesNacimiento === 6 && diaNacimiento >= 21) || (mesNacimiento === 7 && diaNacimiento <= 22)) {
    signo = "Cáncer";
} else if ((mesNacimiento === 7 && diaNacimiento >= 23) || (mesNacimiento === 8 && diaNacimiento <= 22)) {
    signo = "Leo";
} else if ((mesNacimiento === 8 && diaNacimiento >= 23) || (mesNacimiento === 9 && diaNacimiento <= 22)) {
    signo = "Virgo";
} else if ((mesNacimiento === 9 && diaNacimiento >= 23) || (mesNacimiento === 10 && diaNacimiento <= 22)) {
    signo = "Libra";
} else if ((mesNacimiento === 10 && diaNacimiento >= 23) || (mesNacimiento === 11 && diaNacimiento <= 21)) {
    signo = "Escorpio";
} else if ((mesNacimiento === 11 && diaNacimiento >= 22) || (mesNacimiento === 12 && diaNacimiento <= 21)) {
    signo = "Sagitario";
} else if ((mesNacimiento === 12 && diaNacimiento >= 22) || (mesNacimiento === 1 && diaNacimiento <= 19)) {
    signo = "Capricornio";
} else if ((mesNacimiento === 1 && diaNacimiento >= 20) || (mesNacimiento === 2 && diaNacimiento <= 18)) {
    signo = "Acuario";
} else {
    signo = "Piscis";
}

// Mostrar el signo zodiacal
console.log("Tu signo zodiacal es " + signo + ".");
