const texto = "El veloz murciélago hindú comía feliz cardillo y kiwi";

function eliminarVocales() {
    // Escribimos una expresión regular con y sin acento de todas las vocales
    // g (global) -> refiere a toda la cadena 
    // i (insensible) -> insensible a mayúsculas o minúsculas
    return texto.replace(/[aeiouáéíóú]/gi,'');
}

const resultado = eliminarVocales(texto);
document.querySelector('#sin-vocales').innerHTML = resultado;
