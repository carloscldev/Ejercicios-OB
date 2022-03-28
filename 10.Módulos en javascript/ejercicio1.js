/* Crea un archivo "libreria.js" en el que implementes dos funciones:

Una función saludar(String) que reciba como parámetro un nombre e imprima por consola "Hola, " + el parámetro.

Otra función hora() que devuelva en el return la hora actual del sistema.

Para la segunda función debes utilizar la librería "moment.js". Ambas funciones creadas deben ser exportadas para su posterior uso desde otro archivo Javascript. */

"use strict";
const prompt = require("prompt-sync")({sigint:true});
var moment = require('moment');

function saludar(nombre) {
    console.log ("Hola, " +nombre)
}

const nombre = prompt("¿Cúal es tu nombre?: ");
saludar(nombre);

function hora(date) {
  console.log ("Son las " +date)      
}
const date = moment().format('HH:mm:ss');
moment()
hora(date)

