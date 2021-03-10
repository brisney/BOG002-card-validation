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
return true;
}
export default validator;
