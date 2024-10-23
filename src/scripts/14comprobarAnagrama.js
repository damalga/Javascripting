const palabras = ["amor", "roma", "mora", "omar"];

function sonTodosAnagramas() {
    const palabraOrdenada = palabras[0].toLowerCase().split('').sort().join('');
    for ( let i = 0; palabras.length; i++ ){
        if( palabras[i].toLowerCase().split('').sort().join('') == palabraOrdenada){
            // Devolvemos una cadena de caracteres que dice "Si" en vez de true
            return "Si";
        }
        // Devolvemos una cadena de caracteres que dice "No" en vez de false
        return "No";
    }
}

const resultado = sonTodosAnagramas(palabras);
document.querySelector('#anagramas').textContent = `¿Todas las palabras son anagramas? ${resultado}`;
