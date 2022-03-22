/* En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos entre 0 y 20 haciendo uso de un bucle. */

function randomArray(min, max, length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    array.push(number);
  }
  return array;
}
console.log(randomArray(0, 20, 10));
