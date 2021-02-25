import validator from './validator.js';

console.log(validator);
var boton= document.getElementById("sig");//aqui estoy declarando la variable boton leyendo el id del html que se llama nombreusuario
  boton.addEventListener("click", saludousuario);//aqui estoy generando un evento mediante un click generando la funcion saludo usuario

  //Esta es la primera función 
  function saludousuario() { //declaro la funcion que se va a llamar saludo usuario
    var name= document.getElementById("nombreusuario").value;
    document.write("Hola  "  + name +" " + "bienvenido" );
  }
  var botontarjeta= document.getElementById("mostrartarjeta");
  botontarjeta.addEventListener("click", mensajenumerotarjeta);
  // esta es la segunda función
  function mensajenumerotarjeta() {
    var numero= document.getElementById("numerotarjeta").value;
    document.write("Tu numero de tarjeta es:  "  + numero +" " );
}