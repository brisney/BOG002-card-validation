import validator from './validator.js';

console.log(validator);



function cambiar () //declaran la función cambiar
{ 
    var nombre = document.getElementById("espacioparanombre").value //se esta declarando una variable que va a ser igual a lo que el usuario ingreso en espacio para nombre
    var numerodeti = document.getElementById("espacioparaelnumtarjeta").value  //aqui se imprime hola más nombre

    document.getElementById("formulario").innerHTML= "Hola " + nombre + " tu numero de tarjeta es " + numerodeti +"" ;
}

document.getElementById("validar").onclick = function (){ // se ejecuta hasta que se da click
    cambiar();
}
