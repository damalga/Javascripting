const palabras = ["manzana", "naranja", "platano", "pera", "uva", "melocoton", "albaricoque", "ciruela"];

function convertirOrdenar(arr) {
    // Hacemos un forEach para recorrer el array y lo pasamos a Mayus
    // NO utilizamos el metodo .map() pues no necesitamos crear un nuevo array, si no que modificamos el existente
    arr.forEach( (palabra, i) => {
        arr[i] = palabra.toUpperCase();
    } );
    // Lo ordenamos por order alfabético
    arr.sort();
    // Lo pasamos a un strong
    return arr.toString();
}

const palabrasOrdenadas = convertirOrdenar(palabras);

// Muestra el resultado en el div con id 'arr-to-str-mayus-alf'
document.querySelector('#arr-to-str-mayus-alf').innerHTML = palabrasOrdenadas;