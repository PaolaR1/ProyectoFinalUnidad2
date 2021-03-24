function saludar(){
    alert("Hola a todos los lectores")
}

var Nombre = document.getElementById('Nombre');
var Email = document.getElementById('Email');
var Celular = document.getElementById('Celular');
var EscogerProducto = document.getElementById('Ciudad');

function EnviarFormulario(){
    console.log('Enviar');

    if(Nombre.value.length <=0 || Email.value.length <=0 ||Celular.value.length <=0 || Ciudad.value.length <=0){

        swal("Error!", "Rellena todos los campos", "error");
        }else{
            swal("Muy bien!", "Nos contactaremos contigo", "success"); 
        }

}