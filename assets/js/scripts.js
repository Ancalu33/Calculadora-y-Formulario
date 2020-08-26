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

function suma(num1, num2) {
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
console.log(divi(20, 50))