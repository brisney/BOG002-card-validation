import validator from './validator.js';

console.log(validator);



function cambiarHTML (numerodeti) //declaran la función cambiar
{ 
    
    var nombre = document.getElementById("espacioparanombre").value //se esta declarando una variable que va a ser igual a lo que el usuario ingreso en espacio para nombre
    
    console.log (typeof numerodeti)

    document.getElementById("formulario").innerHTML= "Hola " + nombre + " tu numero de tarjeta es " + numerodeti +"" ;
    var tamanostring  = numerodeti.length;
        var cadenaInvertida = "";
    
        while (tamanostring>=0) {
            cadenaInvertida = cadenaInvertida + numerodeti.charAt(tamanostring);
            tamanostring--;
          }
    
          console.log (cadenaInvertida);
    }
   



// function validar(numerodeti) {
//     var tamanostring  = numerodeti.length;
//     var cadenaInvertida = "";

//     while (tamanostring>=0) {
//         cadenaInvertida = cadenaInvertida + numerodeti.charAt(tamanostring);
//         tamanostring--;
//       }

//       console.log (cadenaInvertida);
// }

document.getElementById("validar").onclick = function (){ // se ejecuta hasta que se da click

    var numerodeti = document.getElementById("espacioparaelnumtarjeta").value  //aqui se imprime hola más nombre
    
    cambiarHTML(numerodeti);
}



