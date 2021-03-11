const validator = {
  isvalid,
};
function isvalid(numerodetarjeta){
  let tamanostring  = numerodetarjeta.length;// identificar cuantos caracteres tiene
  console.log(tamanostring)
  let cadenaInvertida = "";
  console.log(tamanostring)

// while que me permite tener el string de izquierda a derecha
  while (tamanostring>=0) { 
      cadenaInvertida = cadenaInvertida + numerodetarjeta.charAt(tamanostring);
      tamanostring--;
     }

     console.log (cadenaInvertida);
     
<<<<<<< HEAD
let arrayInvertida = cadenaInvertida.split(''); //variable que me almacena el string en un tipo array
console.log(arrayInvertida); 


// los for me ayudan a remplazar las posiciones pares por el numero multipliocado x2
for (let i = 0; i < arrayInvertida.length; i++) {
  for (let j     = 0; j < arrayInvertida[i].length; j++) {
    if ( i%2 === 0) {
      arrayInvertida[i] = (arrayInvertida[i])*2;
      console.log(arrayInvertida);
    }
  }
}
console.log(arrayInvertida[2])  

=======
let arr = cadenaInvertida.split('');
console.log(arr); 

// var cadena = cadenainvertida;
//   var longitud = tamanostring;
//   var cifra = null;
//   var cifra_cad=null;
//   var suma=0;
//   for (var i=0; i < longitud; i+=2){
//     cifra = parseInt(cadena.charAt(i))*2;
//     if (cifra > 9){ 
//       cifra_cad = cifra.toString();
//       console.log(cifra_cad+"esto es la variable cifra_cad");
//       cifra = parseInt(cifra_cad.charAt(0)) + 
//  parseInt(cifra_cad.charAt(1));
//     }
//     console.log(cifra+"esto es el valor de cifra")
//     suma+=cifra;
//   }
//   for (var i=1; i < longitud; i+=2){
//     suma += parseInt(cadena.charAt(i));
//   }
   
//   if ((suma % 10) == 0){ 
//    alert("Número de tarjeta correcto");
//   } else {
//    alert("El número de tarjeta no es válido");
//   }
>>>>>>> 3ef44861cf87f9925698f841ee288c41944d7448

return true;
}
export default validator;
