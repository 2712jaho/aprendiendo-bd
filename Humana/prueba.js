let dato_de_usuario = {
  id: 223042870,
  nombre: "Jose Alejandro Humana ortiz",
  carrera: "Ing-Sistemas",
  materias_cursadas: 9,
};

console.log(nombre);

var nombre = "maria";
let texto = `${nombre} es nombre de puta`;

nombre = 23;

// console.log(dato_de_usuario);
console.log("ruta actual de mi directorio ", __dirname);
// console.log("hola");

//LEYENDO UN ARCHIVO .JSON USANDO EL 'fs' file system

const fs = require("fs");

// Obtener la ruta completa del archivo JSON
// const path = require("path");
// const jsonFilePath = path.join(
//   __dirname,
//   "\\youtube-bd\\modelados\\carreras\\Carreras_ModeloDocumental.json"
// );
//C:\Users\josealejandro\Documents\repo de bd\Humana\Carreras_ModeloDocumental.json
let a = false;
if (a == true) {
  fs.readFile(
    __dirname + "\\Carreras_ModeloDocumental.json",
    "utf-8",
    function (error, data) {
      if (error) {
        console.error("Error al leer el archivo:", error);
      } else {
        let data_parseada = JSON.parse(data);
        // console.log(data_parseada);
        // console.log(data_parseada.carreras[1]);
        for (
          let longitud_array = 0;
          longitud_array < data_parseada.carreras.length;
          longitud_array++
        ) {
          let registro = data_parseada.carreras[longitud_array];
          console.log(`Carrera Numero: ${registro.carrera_id}\n
        nombre de la carrera: ${registro.nombre}\n
        tipo de carrera: ${registro.tipo_carrera}\n
        Fecha corrida: ${registro.fecha}\n`);
        }
      }
    }
  );
}

let b = false;
if (b == true) {
  //Importando un modulo .js en mi archivo "prueba.js"

  const modulo_prueba = require("./modulo_prueba");

  //Nota: los metodos a importar deben tener la propiedad "exports.nombre_metodo" No se puede utilizar un metodo que
  // este declarado en mi modulo PERO NO TENGA el atributo "exports"
  // console.log(modulo_prueba.resta(10,9))//Dara error ya que el metodo existe en mi modulo "modulo_prueba" pero sin "exports"

  let result = modulo_prueba.suma(2, 5);
  console.log(result);
}
