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

        for (let i = 0; i < arrayInvertida.length; i++) {
                if ( i%2 != 0) {
                  arrayInvertida[i] = (arrayInvertida[i])*2;
                  console.log(arrayInvertida);
              }
              let valor = arrayInvertida[i]; //en la varible valor identficamos las nuevas posiciones 
                if(valor >= 10){
                    let num1 = Number(valor.toString().split('')[0]);//se suma num1 con
                    let num2 = Number(valor.toString().split('')[1]);//num 2
                    let sumaNume= num1 + num2; // resultado de los numeros desglozados
                    arrayInvertida[i] = sumaNume;;
              }else if ( i%2 === 0) {
                    arrayInvertida[i] = (arrayInvertida[i]*1);
                    console.log(arrayInvertida);
            
              }
        }      
return true;

}

export default validator;

