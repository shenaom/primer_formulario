var formulario = document.getElementById("formulario");
var e = 0 

function validarNombre(){
    if (formulario[0].value == "") {
        alert("Ingrese su Nombre")
        e++
    }
}

function validarCorreo(){
    if (formulario[1].value == "") {
        alert("Ingrese su Correo")
        e++
    }
}

function validarTelefono(){
    if (formulario[2].value.length != "10" || !/^([0-9])*$/.test(formulario[2].value) ) {
        alert("El teléfono no es válido. Ingrese sólo 10 numeros")
        e++
    }
}

function validarPais() {
    if (formulario[3].value == "") {
        alert("Seleccione un País de la lista.")
        e++
    }
}

function validarUser() {
    if (formulario[4].value == "") {
        alert("Ingrese un usuario")
        e++
    } else if (formulario[4].value.length >= 25 || formulario[4].value.length < 5 ) {
        alert("El usuario debe tener de 5 a 25 caracteres")
        e++
    } else if (!/^\w/.test(formulario[4].value)){
        alert("Ingrese sólo caracteres alfanuméricos")
        e++
    }
}

function validarPass() {
    if (formulario[5].value == "") {
        alert("Ingrese contraseña")
        e++
    } else if (formulario[5].value.length >= 20 || formulario[5].value.length < 5){
        alert("Ingrese una contraseña de 5 a 20 caracteres, incluyendo caracteres especiales")
        e++
    }
}

function validar(){
        validarNombre();
        validarCorreo();
        validarTelefono();
        validarPais();
        validarUser();
        validarPass();
        if (e>0){
            event.preventDefault()
        }
}

formulario.addEventListener("submit", validar)