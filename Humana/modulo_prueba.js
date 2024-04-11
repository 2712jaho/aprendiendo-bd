console.log("Texto que se encuentra dentro de mi modulo_prueba.js");

exports.suma = (a, b) => {
  return a + b;
};

resta = (a, b) => {
  return a - b;
};

//nota: los metodos que con el atributo "exports" son especificos para importacion de modulos por ende
//no funcionan en el mismo archivo A MENOS QUE COLOQUEMOS LA PROPIEDAD THIS.nombre_metodo
console.log(this.suma(10, 9));

console.log(resta(10, 9));
