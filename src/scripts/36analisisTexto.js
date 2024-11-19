const textoEjemplo ="¡El gato que canta canta tanto que encanta, pero si el gato encanta tanto como canta, el canto del gato encantado canta y encanta a otro gato que también canta y encanta! ";

function analizarTexto(texto) {
  // Dividir el texto en palabras y limpiar signos de puntuación
  const palabras = texto.toLowerCase().split(/\W+/).filter(Boolean);

  // Contar palabras
  const conteoPalabras = palabras.reduce((acu, palabra) => {
    if (!acu[palabra]) {
      // Si no está, inicializa el conteo en 1
      acu[palabra] = 1;
    } else {
      // Si la palabra ya está en el acumulador, incrementa el conteo
      acu[palabra]++;
    }
    return acu;
  }, {});

  // Encontrar la palabra más frecuente
  let palabraMasFrecuente = "";
  let maxConteo = 0;
  for (const [palabra, conteo] of Object.entries(conteoPalabras)) {
    if (conteo > maxConteo) {
      palabraMasFrecuente = palabra;
      maxConteo = conteo;
    }
  }

  // Retornar los resultados en un objeto
  return {
    totalPalabras: palabras.length,
    conteoPalabras,
    palabraMasFrecuente,
  };
}

const resultado = analizarTexto(textoEjemplo);
document.querySelector('#analisis-texto').textContent = JSON.stringify(resultado, null, 2);
