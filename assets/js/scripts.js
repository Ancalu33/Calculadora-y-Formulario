/* const inputNum1=document.getElementById('num1').value 
console.log(typeof inputNum1)

//const num2=parseInt(prompt("Escribir el primer numero"))
//const num3=parseInt(prompt("Escribir el segundo numero")) */

let num1 = 0
let num2 = 0


function leerDatos() {
    num1 = parseInt(document.getElementById('num1').value)
    num2 = parseInt(document.getElementById('num2').value)
}

let resultado = document.getElementById('Res')

function operacion(operador) {

    switch (operador) {
        case "+":
            leerDatos()
            resultado.innerText = num1 + num2
            console.log(num1, num2, resultado)
            break;
        case "-":
            leerDatos()
            resultado.innerText = num1 - num2
            console.log(num1, num2, resultado)
            break;
        case "*":
            leerDatos()
            resultado.innerText = num1 * num2
            console.log(num1, num2, resultado)
            break;
        case "/":
            leerDatos()
            resultado.innerText = num1 / num2
            console.log(num1, num2, resultado)
            break;
        default:
            console.log("No es una operacion activa")
            break;
    }

}

/* function validaNumericos(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
} */

const mensajeNombre = document.getElementById('mensajeAlertaNombre')
console.log(mensajeNombre)
const mensajeTyC = document.getElementById('mensajeAlertaTyc')
console.log(mensajeNombre)

function validarFormulario(event) {
    event.preventDefault()
    let inputName = document.getElementById('name')
    console.log(inputName)
    let inputTyC = document.getElementById('chekboxTyC')
    console.log(inputTyC)

    if (inputName.value == '') {
        mensajeNombre.innerText = "Complete el campo nombre"
        inputName.classList.add('bgcAlert')
        swal("Error", "Ingrese nombre!", "error");

    }
    if (inputTyC.cheked == false) {
        mensajeTyC.innerText = "Acepte los terminos y condiciones"
        swal("Error", "Acepte los terminos y condiciones!", "error");
    }

    if (inputName != "" && inputTyC.cheked) {

        swal("Muy bien!","registro existoso","success");
        
    }


}