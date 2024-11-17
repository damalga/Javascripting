const palabras = ["perro", "gato", "águila", "ñu", "murciélago", "cocodrilo", "nutria", "alpaca", "camello", "guepardo"];

// Función para contar las vocales de una palabra
function contarVocales(palabra){
  // Busca coincidencias en una cadena de texto basándose en un expresión regular
  const vocales = palabra.match(/[aeiouáéíóúü]/gi);
  // Operador ternario. Forma corta de escribir if...else
  return vocales ? vocales.length : 0;
}

// Función principal para ordenar las palabras
function ordenarPalabrasVocales(arr) {
  // Creamos un array de objetos que contiene la palabra y su cantidad de vocales
  const cantidadVocales = arr.map(palabra => ({
    palabra: palabra,
    vocales: contarVocales(palabra),
  }));
  // Ordenamos el array de objetos por la cantidad de vocales, de menor a mayor
  cantidadVocales.sort((a, b) => b.vocales - a.vocales);
  // Devolvemos solo las palabras ordenadas
  return cantidadVocales.map(item => item.palabra);
}

const resultado = ordenarPalabrasVocales(palabras);
document.querySelector('#ordenar-palabras-vocales').textContent = resultado;
