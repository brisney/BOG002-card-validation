const validator = {
  isvalid,
  maskify,
};
function isvalid(numerodetarjeta) {
  let tamanostring = numerodetarjeta.length;// identificar cuantos caracteres tiene
  console.log(tamanostring)
  let cadenaInvertida = "";//es un campo vacio
  console.log(tamanostring)

  // while que me permite tener el string de izquierda a derecha
  while (tamanostring >= 0) {
    cadenaInvertida = cadenaInvertida + numerodetarjeta.charAt(tamanostring);//estamos convirtiendo en un array separando cada uno de los caracteres
    tamanostring--;//es el contador del ciclo y esta disminuyendo cada vez que se ejecute
  }

  console.log(cadenaInvertida);

  let arrayInvertida = cadenaInvertida.split(''); //variable que me almacena el string en un tipo array ""
  console.log(arrayInvertida);

  for (let i = 0; i < arrayInvertida.length; i++) {//
    if (i % 2 != 0) {
      arrayInvertida[i] = (arrayInvertida[i]) * 2;
      console.log(arrayInvertida);
    }
    let valor = arrayInvertida[i];
    if (valor >= 10) {
      let num1 = Number(valor.toString().split('')[0]);
      let num2 = Number(valor.toString().split('')[1]);
      let sumaNume = num1 + num2;
      arrayInvertida[i] = sumaNume;;
    } else if (i % 2 === 0) {
      arrayInvertida[i] = (arrayInvertida[i] * 1);
      console.log(arrayInvertida);

    }
  }

  let totalstring = arrayInvertida.reduce((a, b) => a + b, 0);
  console.log(totalstring);
  if ((totalstring % 10) === 0) {
    console.log("deberia retornar true");
    return true;
  } else {
    console.log("deberia retornar false");
    return false;
  }
}

function maskify(numtarjeta) {
  let cadenastring = numtarjeta.replace(/.(?=.{4})/g, "#");
  console.log(cadenastring);
  return cadenastring;
}

export default validator;
