

const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeApellido = document.getElementById('mensajeAlertaApellido')
const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
const mensajePassword = document.getElementById('mensajeAlertaPassword')
const mensajeEdad = document.getElementById('mensajeAlertaEdad')
const mensajeTyC = document.getElementById('mensajeAlertTyC')
console.log(mensajeNombre, mensajeApellido, mensajeTyC)

function validarFormulario(event) {
    event.preventDefault()
    let inputName = document.getElementById('name')
    let inputLastname = document.getElementById('lastname')
    let inputEmail = document.getElementById('email')
    let inputPassword = document.getElementById('password')
    let inputYears = document.getElementById('years')
    let inputTyC = document.getElementById('chekboxTyC')
    console.log(inputName, inputLastname, inputEmail, inputPassword, inputYears, inputTyC)


    if (inputTyC.checked == false) {
        mensajeTyC.innerText = "Campo requerido"
        inputTyC.innerText = "Acepte los terminos y condiciones"
        swal("Error", "Acepte los terminos y condiciones!", "error");
    }
    if (inputYears.value == '') {
        mensajeEdad.innerText = "Campo requerido"
        inputYears.classList.add('bgcAlert')
        swal("Error", "Ingrese Edad!", "error");

    }
    if (inputPassword.value == '') {
        mensajePassword.innerText = "Campo requerido"
        inputPassword.classList.add('bgcAlert')
        swal("Error", "Ingrese Password!", "error");

    }
    if (inputEmail.value == '') {
        mensajeCorreo.innerText = "Campo requerido"
        inputEmail.classList.add('bgcAlert')
        swal("Error", "Ingrese Correo!", "error");

    }
    if (inputLastname.value == '') {
        mensajeApellido.innerText = "Campo requerido"
        inputLastname.classList.add('bgcAlert')
        swal("Error", "Ingrese Apellido!", "error");

    }
    if (inputName.value == '') {
        mensajeNombre.innerText = "Campo requerido"
        inputName.classList.add('bgcAlert')
        swal("Error", "Ingrese nombre!", "error");

    }

    if (inputName.value != '' && inputTyC.checked && inputLastname.value != '' && inputEmail.value != '' && inputPassword.value != '' && inputYears.value != '' ) {
        swal("Muy bien!", "registro existoso", "success")
            .then((value) => {
                window.location = './assets/pages/calculadora.html';
            }); //Sweet alert con promesa, para cambiar pagina luego de dar click en ok
    }


}