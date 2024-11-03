const cadena = "abbcccddddeeeeeffffffggggghhhhiiijjk";

function encontrarSecuenciaMasLarga(cad) {
  // Caracter que estamos contando actualmente (no confundir con char)
  let charActual = "";
  let longActual = 0;
  let charMax = "";
  let longMax = 0;
  for (let i = 0; i <= cad.length; i++) {
    // Caracter actual (no confundir con charActual)
    const char = cad[i];
    // En la primera iteración pasamos directamente al else
    if (char === charActual) {
      longActual++;
    } else {
      // Si cambia de carácter, verificamos si la secuencia actual es la más larga
      if (longActual > longMax) {
        charMax = charActual;
        longMax = longActual;
      }
      charActual = char;
      longActual = 1;
    }
    //console.log(char);
  }
  // Una vez terminado el bucle,
  // Puede ser que la secuencia más larga esté al final.
  // Así que hacemos una última comprobación
  if (longActual > longMax) {
    charMax = charActual;
    longMax = longActual;
  }

  return { caracter: charMax, longitud: longMax };
}

const resultado = encontrarSecuenciaMasLarga(cadena);
document.querySelector("#secuencia-larga").textContent = JSON.stringify(
  resultado,
  null,
  2,
);
