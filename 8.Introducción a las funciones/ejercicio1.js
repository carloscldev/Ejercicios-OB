/* En este ejercicio tienes que crear varias funciones. Las funciones tienen que representar las operaciones básicas de una calculadora: sumar, restar, multiplicar y dividir.

En la función de dividir, tendréis que realizar una comprobación para verificar que el segundo número no sea un 0, en el caso de que sea un 0 tendréis que mostrar el mensaje “No se puede dividir por cero”.

Tienes que mostrar los resultados por consola. */


function sum (num1, num2){
  return num1 + num2;
};

function substraction (num1, num2){
  return num1 - num2;
};

function multiplication (num1, num2){
  return num1 * num2;
};

function division (num1, num2){
    if (num2 == 0) 
    console.log("No se puede dividir por cero");
   	else{
  	return num1 / num2;}  
};

let resultSum = sum(4, 5);
console.log(resultSum);

let resultSubstraction = substraction(14, 2);
console.log(resultSubstraction);

let resultMultiplication = multiplication(4, 5);
console.log(resultMultiplication);

let resultDivision = division(14, 0);
console.log(resultDivision);
