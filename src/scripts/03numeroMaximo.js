const numeros = [1,34,76,158,23,89,108,4,56,98,12,122,7];

function encontrarMaximo(arr) {
    // Usamos el operador spread [...]
    // Este sirve para pasar los elementos de un array como argumentos individuales
    // en este caso a Math.max
    return Math.max(...arr);
}
const maximo = encontrarMaximo(numeros);
document.querySelector('#maximo').textContent = maximo;