const validator = {
  isvalid,
};
function isvalid(numerodetarjeta){
  let tamanostring  = numerodetarjeta.length;
  let cadenaInvertida = "";

  while (tamanostring>=0) {
      cadenaInvertida = cadenaInvertida + numerodetarjeta.charAt(tamanostring);
      tamanostring--;
     }

     console.log (cadenaInvertida);
     
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

return true;
}
export default validator;
