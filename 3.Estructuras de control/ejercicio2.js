/* En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo". */

for (let step=1; step<=10; step++) {
if ([2,3,5,7].includes(step))
console.log("Número primo");
else
console.log (step);
}
