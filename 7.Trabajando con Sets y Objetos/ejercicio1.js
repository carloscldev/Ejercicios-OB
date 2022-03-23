/* Crea un archivo "coche.js" que implemente una clase Coche con un constructor con las siguientes características:

Debe recibir 3 parámetros: peso, potencia y marca.

Peso y potencia deben ser números, y marca una String.

La clase debe tener variables de clase en las que se almacene el valor de los parámetros pasados al constructor.

La clase Coche debe ser exportada como un módulo para poder ser usada desde otros archivos javascript. */



class Coche {
  constructor( peso, potencia, marca) {
    this.peso = peso;
    this.potencia = potencia;
    this.marca = marca;    
  }

  setPeso( peso ) {
    this.peso = peso;
  }
}

let vehiculo = new Coche( 1500, 150, 'Toyota' );
console.log( 'Peso',vehiculo.peso );
console.log( 'Potencia', vehiculo.potencia );
console.log( 'Marca', vehiculo.marca );

vehiculo.setPeso( 1600 );
console.log( 'Nuevo peso:', vehiculo.peso );
