/* Crea un archivo "ejercicio.js" que contenga una función sumar(a, b) que reciba dos parámetros y devuelva la suma de estos.

En caso de que uno de los parámetros no sea un número, la función debe lanzar un error que indique el problema.*/


function sumar(a,b) {
  
    let num1 = 44;
    let num2 = 27;
    suma = num1 + num2;
    
    if (isNaN(num1)) {
      return 'error no es un número';}
    if (isNaN(num2)) {
      return 'error no es un número';
    }
    else {
    console.log('La suma de los números es: ' +suma);}
  }
  
  sumar();
