const sustantivos = ["sol", "luna", "mar", "viento", "estrella", "montaña", "río", "bosque"];
const verbos = ["danza", "brilla", "sopla", "canta", "fluye", "susurra", "cae"];
const adjetivos = ["brillante", "silenciosa", "eterno", "suave", "fugaz", "majestuosa", "profundo"];
const adverbios = ["suavemente", "eternamente", "lentamente", "armoniosamente", "silenciosamente"];
const preposiciones = ["sobre", "bajo", "junto a", "entre", "hacia"];

function generarPoema() {
  // Selecciona una palabra aleatoria
  function palabraAleatoria(arr) {
    // Aquí seleccionarás y devolverás un elemento del array
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Genera un verso con estructura 1: [Adjetivo] [Sustantivo] [Verbo] [Adverbio]
  function versoTipo1() {
    let adj = palabraAleatoria(adjetivos);
    let sust = palabraAleatoria(sustantivos);
    let verb = palabraAleatoria(verbos);
    let adv = palabraAleatoria(adverbios);
    return `${adj} ${sust} ${verb} ${adv}`;
  }

  // Genera un verso con estructura 2: [Sustantivo] [Verbo] [Preposición] [Sustantivo]
  function versoTipo2() {
    let sust1 = palabraAleatoria(sustantivos);
    let verb = palabraAleatoria(verbos);
    let prep = palabraAleatoria(preposiciones);
    let sust2 = palabraAleatoria(sustantivos);
    return `${sust1} ${verb} ${prep} ${sust2}`;
  }

  // Alterna entre versoTipo1 y versoTipo2 para crear el poema.
  const poema = [];
  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      poema.push(versoTipo1());
    } else {
      poema.push(versoTipo2());
    }
  }

  // Unir versos y devolver
  return poema.join("\n");
}

const resultado = generarPoema();
document.querySelector('#poema-aleatorio').textContent = generarPoema();
