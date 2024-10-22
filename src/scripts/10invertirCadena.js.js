const texto = "es acaso Javascript el lenguaje más caotico del mundo";

function invertirCadena() {
    const palabras = texto.split(' ');
    const invertirTexto = palabras.reverse();
    const arrayToString = invertirTexto.join(' ');
    return arrayToString;
}

const resultado = invertirCadena(texto);
document.querySelector('#cadena-invertida').innerHTML = resultado;
