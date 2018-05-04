var formulario = document.getElementById("formulario");


var validarNombre = function(e){
    if (formulario[0].value == "") {
        alert("Ingrese su Nombre")
        e.preventDefault()
    }
}

var validarCorreo = function(e){
    if (formulario[1].value == "") {
        alert("Ingrese su Correo")
        e.preventDefault()
    }
}

var validarTelefono = function(e){
    if (formulario[2].value.length != "10" || !/^([0-9])*$/.test(formulario[2].value) ) {
        alert("El teléfono no es válido. Ingrese sólo 10 numeros")
        e.preventDefault()
    }
}

var validarPais = function (e) {
    if (formulario[3].value == "") {
        alert("Seleccione un País de la lista.")
        e.preventDefault()
    }
}

var validarUser = function (e) {
    if (formulario[4].value == "") {
        alert("Ingrese un usuario")
        e.preventDefault()
    } else if (formulario[4].value.length >= 25 || formulario[4].value.length < 5 ) {
        alert("El usuario debe tener de 5 a 25 caracteres")
        e.preventDefault()
    } else if (!/^\w/.test(formulario[4].value)){
        alert("Ingrese sólo caracteres alfanuméricos")
        e.preventDefault()
    }
}

var validarPass = function (e) {
    if (formulario[5].value == "") {
        alert("Ingrese contraseña")
        e.preventDefault()
    } else if (formulario[5].value.length >= 20 || formulario[5].value.length < 5){
        alert("Ingrese una contraseña de 5 a 20 caracteres, incluyendo caracteres especiales")
        e.preventDefault()
    }
}

var validar= function(e){
        validarNombre(e);
        validarCorreo(e);
        validarTelefono(e);
        validarPais(e);
        validarUser(e);
        validarPass(e);
}

formulario.addEventListener("submit", validar)