/* En este ejercicio tienes que rellenar un array con los números del 10 al 20 y mostrarlo por consola.. */

function addArray(min, max) {
  let array = [];
  for (let number = 10; number <= 20; number++) {
    array.push(number);
  }
  return array;
}
console.log(addArray(10, 20));
