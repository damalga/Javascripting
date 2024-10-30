const txt1 = "La comadreja toca la trompeta detrás del palenque de paja";
const txt2 = "El jabalí juega al dominó delante del mausoleo de tierra";

function caracteresUnicos(txt){
  const txtNormalizado = txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const setCaracteresUnicos = new Set();

  for (let i = 0; i < txtNormalizado.length; i++){
    const caracter = txtNormalizado[i];
    // Ignorar los espacios
    if (caracter !== " ") {
      setCaracteresUnicos.add(caracter);
    }
  }

  // Convertir el Set a un string
  return Array.from(setCaracteresUnicos).join('');
}

const resultado1 = caracteresUnicos(txt1);
const resultado2 = caracteresUnicos(txt2);
// Comparación de la longitud de los resultados
let comparacion;
if (resultado1.length > resultado2.length) {
    comparacion = "La primera cadena tiene más caracteres únicos.";
} else if (resultado1.length < resultado2.length) {
    comparacion = "La segunda cadena tiene más caracteres únicos.";
} else {
    comparacion = "Ambas cadenas tienen la misma cantidad de caracteres únicos.";
}

document.querySelector('#cadena-caracteres-unicos').innerHTML =  `Resultado para texto 1: ${resultado1} <br> Resultado para texto 2: ${resultado2} <br> ${comparacion}`;
