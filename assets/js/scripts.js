//     TIPOS VARIABLES


/* 
//VAR
var dato="asdf"
console.log(dato)
var dato=20
console.log(dato)

//LET
let dato2="asdf"
console.log(dato)
dato2=20
console.log(dato)

//CONST
const dato3=["asdg", "rty"]
console.log(dato3)
dato3.push("ghj")
console.log(dato3)

 
var nombre="Joselito"

if (true) {
    var nombre="Pepito"//------ Reemplaza el dato/ alcance global
}
console.log(nombre)

let deporte="futbol"
if (true) {
    deporte="baloncesto"
    // let deporte="baloncesto"   -----Variable local/alcance en bloque
    //console.log(deporte) 
}
console.log(deporte)
 */


//      FUNCIONES


//FUNCIONES CONVENCIONALES

/* function suma(num1, num2) {
    return num1 + num2
}

function resta(num1, num2) {
    return num1 - num2
}

function multp(num1, num2) {
    return num1 * num2
}

function divi(num1, num2) {
    return num1 / num2
}

console.log(suma(20, 50))
console.log(resta(20, 50))
console.log(multp(20, 50))
console.log(divi(20, 50)) */

//FUNCIONES ANONIMAS - TIPO FLECHA

/* const miFuncion= (num1, num2 )=>{
    return num1+num2
}

//const miFuncion= (num1, num2)=> num1+num2    ----- OPCION CORTA 1 SOLA INSTRUCCION


console.log (miFuncion(5,6)) */



//      CONDICIONALES Y CICLOS
//  ---IF

const hora = 7

if (hora >= 8) {
    console.log("La tienda esta abierta")
} else {
    console.log("La tienda esta cerrada")
}

if (hora >= 9) {
    console.log("Estamos en servicio")

} else if (hora >= 8) {
    console.log("Estamos abriendo, ingrese a las 9")

} else {
    console.log("La tienda esta cerrada")
} {

}

const genero = "hombre"
const edad = 18

if (genero == "mujer" && edad >= 18) {
    console.log("Si, es mujer mayor de edad, puede ingresar")
} else {
    console.log("No puede ingresar")

}

if (genero == "mujer" || edad >= 18) {
    console.log("Si, es mujer mayor de edad, puede ingresar")
} else {
    console.log("No puede ingresar")

}

if (2 === "2") { //    ===  Estrictamente igual, compara el tipo de dato 
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

const nombre = prompt("Dinos tu nombre").toLocaleLowerCase()

if (nombre != "pepito") {
    console.log("Bienvenido a nuestro bar")
} else {
    console.log("Pepito no es bienvenido")
}

function diaSemana(dia) {

    switch (dia) {
        case "Lunes":
            console.log("Es lunes dia de trabajo")
            break;
        case "Martes":
            console.log("Es martes dia de trabajo")
            break;
        case "Miercoles":
            console.log("Es miercoles dia de trabajo")
            break;
        case "Jueves":
            console.log("Es jueves dia de trabajo")
            break;
        case "Viernes":
            console.log("Es viernes dia de trabajo")
            break;
        case "Sabado":
            console.log("Es sabado dia de trabajo")
            break;
        case "Domingo":
            console.log("Es sabado dia de descanso")
            break;
        default:
            console.log("No es ningun dia")
            break;
    }
}