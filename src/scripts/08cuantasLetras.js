const frase = "¡Hola Mundo! Vamos a contar todas las letras de esta frase.";

function contarLetras() {
    // Pasamos todo el string a minúscula y lo hacemos un array,
    const letras = frase.toLowerCase().split('');
    // Creamos un objeto
    const conteo = {};
    // Recorremos el array excluyendo caracteres que no sean letras
    letras.forEach( letra => {
        // Comparamos cara letras con la expresión regular /[a-z]/
        if (/[a-z]/.test(letra)) { 
            // Si la letra ya existe en el objeto, incrementamos el contador
            if (conteo[letra]) {
                conteo[letra] += 1;
            } else {
                // Si no existe, la inicializamos a 1
                conteo[letra] = 1;
            }
        }
    });

    return conteo;
}

const conteo = contarLetras(frase);
document.querySelector('#conteo-letras').innerHTML = JSON.stringify(conteo);
