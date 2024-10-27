const palabras = ["javascript", "mola", "mazo", "mogollon"];

function agruparPorLongitud(arr) {
  // Recorre el array, acumulando un valor a medida que avanza.
  return arr.reduce((acu, palabra) => {
    let long = palabra.length;
    // Si no existe palabra de esta longitud, la iniciamos en un array.
    if (!acu[long]) {
      acu[long] = [];
    }
    acu[long].push(palabra);
    // Devolver el acumulador para mantener el valor acumulado hasta el final.
    return acu;
    // Iniciamos el actumulador (acu) como un objeto vacío.
  }, {});
}

const resultado = agruparPorLongitud(palabras);
document.querySelector('#agrupacion').innerHTML =
// 1er param: Objeto que quieres convertir a JSON.
// 2do param: Reemplazador, que puedes dejar como null para mantener todos los elementos.
// 3er param: Num que representa el nivel de espaciado (en este caso 4), que crea saltos de línea y sangría.
JSON.stringify(resultado,null,4)
