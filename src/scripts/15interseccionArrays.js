const array1 = [1,2,3,4,5,6,10,11,12,13,14,15];
const array2 = [4,5,6,7,8,9,14,15,16,17,18,19];

function interseccion() {
    // filter() crea un nuevo array con los elementos que cumplen la condición
    // su callback, es decir, la función de dentro del filter
    // verifica si el array contiene un valor específico
    return array1.filter(numero => array2.includes(numero));
}

const resultado = interseccion(array1, array2);
document.querySelector('#interseccion').textContent = `Los números comunes son: ${resultado.join(', ')}`;
