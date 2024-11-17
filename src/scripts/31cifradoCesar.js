const texto = "Hola, Carajaula!";
const desplazamiento = 4;

function cifradoCesar(texto, desplazamiento) {
  // Variable para almacenar el texto cifrado
  let resultado = '';

  // Recorre cada caracter en el texto
  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];

    // Si es una letra mayúscula
    if (char >= 'A' && char <= 'Z') {
      // Convierte la letra a su valor numérico correspondiente en la tabla ASCII (Unicode)
      const codigo = char.charCodeAt(0);
      // Corrección para desplazamientos negativos
      const nuevaPosicion = ((codigo - 65 + desplazamiento) % 26 + 26) % 26;
      resultado += String.fromCharCode(65 + nuevaPosicion);
    }
    // Si es una letra minúscula
    else if (char >= 'a' && char <= 'z') {
      const codigo = char.charCodeAt(0);
      const nuevaPosicion = ((codigo - 97 + desplazamiento) % 26 + 26) % 26;
      resultado += String.fromCharCode(97 + nuevaPosicion);
    }
    // Si no es una letra
    else {
      resultado += char;
    }
  }

  return resultado;
}

const resultado = cifradoCesar(texto, desplazamiento);
document.querySelector('#cifrado-cesar').textContent = resultado;
