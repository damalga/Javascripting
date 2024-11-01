const texto = "Hola, hola mundo. ¡Este es un mundo increíble! Un mundo lleno de sorpresas.";

function generarHistograma(txt){
    const txtNormalizado = txt
    // Convierte todo a minúsculas para uniformidad.
    .toLowerCase()
    // Descompone caracteres acentuados.
    .normalize("NFD")
    // Remueve los acentos.
    .replace(/[\u0300-\u036f]/g, "")
    // Remueve los signos de puntuación.
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¡¿?"']/g, "");
    
    
    const palabras = txtNormalizado.split(' ');
    console.log(palabras);
}

const resultado = generarHistograma(texto);
/*
Resultado:
{
  hola: 2,
  mundo: 3,
  este: 1,
  es: 1,
  un: 2,
  increíble: 1,
  lleno: 1,
  de: 1,
  sorpresas: 1
}
*/
