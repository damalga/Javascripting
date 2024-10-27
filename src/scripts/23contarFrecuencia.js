const cadena = "Electraencefalográfico";

function contarFrecuencia(cadena) {
  const freq = {};
  // Normalizamos la cadena: a minúsculas y sin acentos / normalize("NFD") (Normalization Form Decomposition).
  // + .replace(/[\u0300-\u036f]/g, "") elimina el acento, dejando solo la letra base.
  const cadenaNormalizada = cadena.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (let i = 0; i < cadenaNormalizada.length; i++){
    const caracter = cadenaNormalizada[i];
    if (caracter !== " "){
      if (freq[caracter] === undefined){
        freq[caracter] = 1;
      }else{
        freq[caracter] += 1;
      }
    }
  }
  return freq;
}

const resultado = contarFrecuencia(cadena);
document.querySelector('#frecuencia').innerHTML = JSON.stringify(resultado, null, 2);
