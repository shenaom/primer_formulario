var formulario = document.getElementById("formulario");


validarNombre = function(e){
    if (formulario[0].value == "") {
        alert("Ingrese su Nombre")
        e.preventDefault()
    }
}

validarCorreo = function(e){
    if (formulario[1].value == "") {
        alert("Ingrese su Correo")
        e.preventDefault()
    }
}

validarTelefono = function(e){
    if (formulario[2].value.length != "10" || !/^([0-9])*$/.test(formulario[2].value) ) {
        alert("El teléfono no es válido. Ingrese sólo 10 numeros")
        e.preventDefault()
    }
}

// validarPais

validar = function(e){
    validarNombre(e);
    validarCorreo(e);
    validarTelefono(e);
    // validarPais(e);
}

formulario.addEventListener("submit", validar)