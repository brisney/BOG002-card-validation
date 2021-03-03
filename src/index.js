import validator from './validator.js';

console.log(validator);
function saludaralusuario (){ //eatoy declarando la función saludar al usuario
 const nombre= document.getelementbyid("espacioparanombre").value//se esta declarando una variable que va a ser igual a lo que el usuario ingreso en espacio para nombre
 document.getelementbyid("formulario").innerHTML="Hola " + nombre}//aqui se imprime hola más nombre

document.getelementbyid("validar").onclick=function(){
    saludaralusuario()
}