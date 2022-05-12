var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarformulario(){
    console.log('Enviando formulario...')
     
    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Ingresa tu mensaje');
    }

    error.innerHTML = mensajesError.join(', ');
    return false;
}