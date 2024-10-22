const frase = "Javascript es divertido y un reto constante.";

function palabraMasLarga() {
    const palabras = frase.split(' ');
    let palabraLarga = '';

    palabras.forEach(palabra  => {
        if(palabra.length > palabraLarga.length){
            palabraLarga = palabra;
        }
    });

    return palabraLarga;
}

const resultado = palabraMasLarga(frase);
document.querySelector('#palabra-larga').innerHTML = resultado;
