//se llama al objeto de validación de la tarjeta que se encuentra en validator.js
import validator from './validator.js';

console.log(validator);

//realizamos el evento con un onclick ejecutando la función cambiar HTML para que no permita acceder al siguiente campo sin rellenar 

document.getElementById("validar").onclick = function () { // se ejecuta hasta que se da click
    
    var imputnumerotarjeta = document.getElementById("espacioparaelnumtarjeta");
    var numerodeti = imputnumerotarjeta.value;  
    if (numerodeti != ""){ cambiarHTML(numerodeti);}
    console.log(numerodeti)
   
}

//se hace una funcion que imprime los datos ingresados por el usuario en otro cmapo 

function cambiarHTML (numerodeti) {//declaran la función en la vamos a mostrar el texto 
    var nombre = document.getElementById("espacioparanombre").value; //usando los datos de espacioparanombre y convirtiendolos en la variable nombre JS
    var fechaven = document.getElementById("espaciofechavencimiento").value;
        document.getElementById("cuadroform").innerHTML= "Hola " + nombre + " tu numero de tarjeta es " + numerodeti +" y vence el dia " + fechaven ;//imprimiendo el mensjaes con los datos ingresados por el usuario
 }


// Js identifique cuando el usuario ingreso los numeros y que

// document.getElementById('espacioparaelnumtarjeta').addEventListener('input',validar);


// function validar() {

//     var tipodecaracter = document.getElementById('espacioparaelnumtarjeta');
   

//     if(tipodecaracter  /^[0-9]$/ ){
//         alert = ("estas ingresando un numero");}
//     else{ alert = ("ingresas algo diferente de un numero");}
       

   

// }