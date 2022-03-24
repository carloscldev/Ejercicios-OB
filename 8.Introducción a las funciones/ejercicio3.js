/* En el mismo archivo del ejercicio 2, modifica la función para que alerte al usuario cuando el parámetro no sea un array o este esté vacío.

Si el parámetro es un array con más de un elemento, la función debe realizar lo descrito en el ejercicio anterior. */

let verduras = ['acelga', 'coliflor', 'judias', 'perejil', 'zanahoria'];

function eliminarUltimo(){
if(verduras.length ==0 || Array.isArray(verduras)==false)
  console.log("El array esta vacio");
else{

  document.write(verduras.pop()); 
}
}
console.log(verduras)
eliminarUltimo()
console.log(verduras)
eliminarUltimo()
console.log(verduras)
eliminarUltimo()
console.log(verduras)
eliminarUltimo()
console.log(verduras)
eliminarUltimo()
console.log(verduras)
eliminarUltimo()
