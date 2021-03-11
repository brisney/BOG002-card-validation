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


return true;
}
export default validator;
