/* Modifica el archivo del ejercicio anterior para que los atributos sean privados y tengan sus correspondientes getters y setters. */



class Coche {
  constructor(peso, potencia, marca) {
    this.peso = peso;
    this.potencia = potencia;
    this.marca = marca;    
  }

  get peso(){
    return `El peso es ${this.peso()}`;
    }
  
  set peso(newPeso) {
    this.peso = newPeso;
  }
  
  get potencia(){
    return `La potencia es ${this.potencia()}`;
    }
  
  set potencia(newPotencia) {
    this.potencia = newPotencia;
  }
  
  get marca(){
    return `La marca es ${this.marca()}`;
    }
  
  set marca(newMarca) {
    this.marca = newMarca;
  }
  
}
