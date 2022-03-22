/* En este primer ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle y que cuando muestre un número par, muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.

Pista: tendréis que hacer un comprobación dentro del bucle. */


let count = 0
while (count < 100) {
  count = count + 1
  if ((count % 2) == 0){
    console.log (count + ' ' + 'es un número par')
  }
  else {
    console.log (count + ' ' + 'es un número impar')
  }
  
}
