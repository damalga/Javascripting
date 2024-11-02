const texto =
  "Hola, hola mundo. ¡Este es un mundo increíble! Un mundo esférico lleno de sorpresas.";

function generarHistograma(txt) {
  const txtNormalizado = txt
    // Convierte todo a minúsculas para uniformidad.
    .toLowerCase()
    // Descompone caracteres acentuados.
    .normalize("NFD")
    // Remueve los acentos.
    .replace(/[\u0300-\u036f]/g, "")
    // Remueve los signos de puntuación.
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¡¿?"']/g, "");
  const palabras = txtNormalizado.split(" ");
  return palabras.reduce((acu, palabra) => {
    if (!acu[palabra]) {
      // Si no está, inicializa el conteo en 1
      acu[palabra] = 1;
    } else {
      // Si la palabra ya está en el acumulador, incrementa el conteo
      acu[palabra]++;
    }
    return acu;
  }, {});
}

const resultado = generarHistograma(texto);

document.querySelector("#histograma").textContent = JSON.stringify(
  resultado,
  null,
  2,
);
