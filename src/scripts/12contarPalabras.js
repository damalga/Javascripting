// Metodo moderno
const frase1 = "La cigüeña toca el saxofón detrás del palenque de paja";

function contarPalabras() {
    // split para obtener un array por palabras y filter para
    const palabras = frase1.split(' ').filter(palabra => palabra != '');
    return palabras.length;
}

const resultado1 = contarPalabras(frase1);
document.querySelector('#contar-palabras1').innerHTML = `La frase "${frase1}" tiene <strong>${resultado1}</strong> palabras.`;

// Metodo clásico
const frase2 = "Fabio me exige que añada cerveza al whisky";

let palabras = frase2.split(' ');
let palabrasFiltradas = [];
palabras.forEach(palabra => {
    if (palabra !== '') {
        palabrasFiltradas.push(palabras);
    };
});

const resultado2 = palabrasFiltradas.length;
document.querySelector('#contar-palabras2').innerHTML = `La frase "${frase2}" tiene <strong>${resultado2}</strong> palabras.`;

