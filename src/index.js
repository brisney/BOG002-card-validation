//se llama al objeto de validación de la tarjeta que se encuentra en validator.js no estamos haciendo nada con esto aun 
import validator from './validator.js';
console.log(validator);

//Declaración de variables que me permiten ingresar a los campos con los que interactua el usuario 
// declara variables es como bautizar en JS 

//var nombredelavariablenJS = (se va a declarar como) la información que encuentre en el HTML con el id que se pone en comillas
let campoformulario = document.getElementById("cuadrovalidar");
let inputnumerotarjeta = document.getElementById("espacioparaelnumtarjeta");
let inputnombredeusuario = document.getElementById("espacioparanombre");
let inputnombredeusuariofecha = document.getElementById("espaciofechavencimiento");
let enunciadoInvalido= document.getElementById("enunciadoForm");
let inputbotonvalidar = document.getElementById("validar");
let inputbotonreset = document.getElementById("resetear");



                    //los cambios que estamos haciendo sobre todo el documento 

//ubicandonos en un campo .evento = le decimos que nos ejecute una funcion que esta definida dentro de los corchetes
    inputbotonvalidar.onclick = function evitarquecambiesiestavacio () { // se ejecuta hasta que se da click
     
    let numerodeti = inputnumerotarjeta.value;  
    let nombredeus = inputnombredeusuario.value;

    // la funcion if esta diciendo si (variablenumero de tarjeta es diferente de vacio ejecute lo que esta dentro de los corchetes {}
    if (numerodeti != "" && nombredeus != "" ){ 
        
        cambiarHTML(numerodeti);
        }
        
    }

//se hace una funcion que imprime los datos ingresados por el usuario en otro cmapo 
function cambiarHTML (numerodeti) {//declaran la función en la vamos a mostrar el texto 
    var nombre = inputnombredeusuario.value; //usando los datos de espacioparanombre y convirtiendolos en la variable nombre JS
    var fechaven = inputnombredeusuariofecha.value;
    let resultadovalidacion =  validator.isvalid(numerodeti);
    let stringmaskif =  validator.maskify(numerodeti);

    if (resultadovalidacion === true ){
      
       resultadovalidacion = "valida";
       
       campoformulario.innerHTML= "Hola " + nombre + " tu número de tarjeta finalizada en " + stringmaskif + " con fecha de vencimiento " + fechaven  + " es " + resultadovalidacion;//imprimiendo el mensjaes con los datos ingresados por el usuario
    } else {
        resultadovalidacion = "invalida";
        enunciadoInvalido.innerHTML= "Tu tarjeta es " +resultadovalidacion + " por favor consigna de nuevo los datos ";
    }

//    if (resultadovalidacion === false ){
//     resultadovalidacion = "invalida";
//     campoformulario.innerHTML=  " Tu tarjeta es  " + resultadovalidacion + " por favor ingresa de nuevo ";//imprimiendo el mensjaes con los datos ingresados por el usuario
//    }else {
//    resultadovalidacion = "valida"
   
//    campoformulario.innerHTML= "Hola " + nombre + " tu número de tarjeta finalizada en " + stringmaskif + " con fecha de vencimiento " + fechaven  + " es " + resultadovalidacion;//imprimiendo el mensjaes con los datos ingresados por el usuario
// }
    
   
}
  
 //evento key up para ingresar el nombre en mayusculas
 inputnombredeusuario.addEventListener("keyup",Restringirnombre );

function Restringirnombre() {
   // declaro la variable nombre en JS que toma la información de espacio para nombre
      inputnombredeusuario.value = inputnombredeusuario.value.toUpperCase(); //tomo el valor del nombre y a cada caracter le pongo mayusculas 
}
 
//evento key up para ingresar solo caracteres numericos en el campo de la tarjeta
inputnumerotarjeta.addEventListener("keyup",restringirnumero );

function restringirnumero() {
        inputnumerotarjeta.value= inputnumerotarjeta.value.replace(/\D+/g, '').replace(/\s/g, '').trim ();
}




