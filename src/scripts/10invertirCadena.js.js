const textoOriginal = "es acaso Javascript el lenguaje más caotico del mundo";

function invertirCadena() {
    const palabras = textoOriginal.split(' ');
    const invertirTexto = palabras.reverse();
    const arrayToString = invertirTexto.join(' ');
    return arrayToString;
}

const resultado = invertirCadena(textoOriginal);
document.querySelector('#cadena-invertida').innerHTML = resultado;
