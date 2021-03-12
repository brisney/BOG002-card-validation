const validator = {
  isvalid,maskify,
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
              let valor = arrayInvertida[i]; 
                if(valor >= 10){
                    let num1 = Number(valor.toString().split('')[0]);
                    let num2 = Number(valor.toString().split('')[1]);
                    let sumaNume= num1 + num2; 
                    arrayInvertida[i] = sumaNume;;
              }else if ( i%2 === 0) {
                    arrayInvertida[i] = (arrayInvertida[i]*1);
                    console.log(arrayInvertida);
            
              }
        }  
        
    
       
        let totalstring = arrayInvertida.reduce((a, b) => a + b, 0);
        console.log(totalstring);
        if ((totalstring % 10) == 0){ 
          console.log("deberia retornar true");
          return true;
          } else {
            console.log("deberia retornar false");
          return false;
         }
}

export default validator;

function maskify (numerodetarjeta) {
  
  if ( numerodetarjeta.length>4) {
    let ultimos = numerodetarjeta;

    ultimos.splice(ultimos.slice(4),1,'#');
    
  }
  
 console.log(ultimos);
  //  campoformulario.innerHTML= numerodetarjeta;
}


